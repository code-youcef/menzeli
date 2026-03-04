"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthApi, Configuration } from "@/api/generated-client";
import {
  AuthLoginPostRequest,
  AuthValidOtpPostRequest,
  AuthFillNamePostRequest,
  AuthLoginPost200Response,
  AuthValidOtpPost200Response,
} from "@/api/generated-client/models";
import { useMutation } from "@tanstack/react-query";

// Initialize AuthApi with configuration to read token from localStorage
const apiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_URL || "https://menzili-backend.onrender.com/api",
  accessToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") || "";
    }
    return "";
  },
});

const authApi = new AuthApi(apiConfig);

interface User {
  id?: string;
  phone?: string;
  name?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (phone: string) => Promise<AuthLoginPost200Response>;
  verifyOtp: (phone: string, otp: string) => Promise<AuthValidOtpPost200Response>;
  updateName: (name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (token) {
      setIsAuthenticated(true);
      if (storedUser) {
        try {
        console.log({storedUser})
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Failed to parse stored user", e);
        }
      }
    }
    setIsLoading(false);
  }, []);

  const loginMutation = useMutation({
    mutationFn: (request: AuthLoginPostRequest) =>
      authApi.authLoginPost({ authLoginPostRequest: request,acceptLanguage: "en", accept: "application/json" }),
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (request: AuthValidOtpPostRequest) =>
      authApi.authValidOtpPost({ authValidOtpPostRequest: request,acceptLanguage: "en", accept: "application/json"  }),
  });

  const updateNameMutation = useMutation({
    mutationFn: (request: AuthFillNamePostRequest) =>
      authApi.authFillNamePost({ authFillNamePostRequest: request, authorization: "en", acceptLanguage: "en", accept: "application/json"    }),
  });

  const login = async (phone: string) => {
    try {
      return await loginMutation.mutateAsync({ phone });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const verifyOtp = async (phone: string, otpCode: string) => {
    try {
      const response = await verifyOtpMutation.mutateAsync({
        phone,
        otpCode,
      });

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        
        // If fillName is true, we might need to redirect or handle it
        // For now, we assume basic auth is done
        // Since we don't get user object here, we might not set user state yet
        // or we set a partial user object with phone
        const partialUser = { phone };
        setUser(partialUser);
        localStorage.setItem("user", JSON.stringify(partialUser));
        
      }
      return response;
    } catch (error) {
      console.error("OTP verification failed:", error);
      throw error;
    }
  };

  const updateName = async (name: string) => {
    try {
      const response = await updateNameMutation.mutateAsync({ name });
      
      if (response.data?.user) {
        const updatedUser = { ...user, ...response.data.user };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        router.push("/");
      }
    } catch (error) {
      console.error("Update name failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/auth");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        verifyOtp,
        updateName,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
