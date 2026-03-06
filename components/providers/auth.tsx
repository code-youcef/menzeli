"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthApi, AuthCompleteProfileOperationRequest, AuthRequestOtp200Response, AuthRequestOtpOperationRequest, AuthVerifyOtp200Response, AuthVerifyOtpOperationRequest, User } from "@/api/generated-client";
import { apiConfig } from "@/lib/api-config";

import { useMutation } from "@tanstack/react-query";
import { AuthLoginPost200Response } from "@/api/generated-client/models/AuthLoginPost200Response";
import { AuthValidOtpPost200Response } from "@/api/generated-client/models/AuthValidOtpPost200Response";
import { AuthFillNamePostRequest } from "@/api/generated-client/models/AuthFillNamePostRequest";
import { AuthLoginPostRequest } from "@/api/generated-client/models/AuthLoginPostRequest";
import { AuthValidOtpPostRequest } from "@/api/generated-client/models/AuthValidOtpPostRequest";

// Initialize AuthApi with configuration to read token from localStorage
const authApi = new AuthApi(apiConfig);



interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (phone: string) => Promise<AuthRequestOtp200Response>;
  verifyOtp: (phone: string, otp: string) => Promise<AuthVerifyOtp200Response>;
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
    mutationFn: (request: AuthRequestOtpOperationRequest) =>
      authApi.authRequestOtp(request),
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (request: AuthVerifyOtpOperationRequest) =>
      authApi.authVerifyOtp(request),
  });

  const updateNameMutation = useMutation({
    mutationFn: (request: AuthCompleteProfileOperationRequest) =>
      authApi.authCompleteProfile (request),
  });

  const login = async (phone: string) => {
    try {
      return await loginMutation.mutateAsync({ "authRequestOtpRequest": { "phone": phone } });  
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const verifyOtp = async (phone: string, otpCode: string) => {
    try {
      const response = await verifyOtpMutation.mutateAsync({
        "authVerifyOtpRequest": {
          phone,
          otpCode,
        }
      });

      if (response?.data?.token) {
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
      const response = await updateNameMutation.mutateAsync({ 
        "authCompleteProfileRequest": {
          name,
        }
       });
      
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
