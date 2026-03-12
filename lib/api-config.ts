import { Configuration } from "@/api/generated-client";


export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://menzili-backend.onrender.com"
export const apiConfig = new Configuration({
  basePath: `${API_URL}/api`,
  accessToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") || "";
    }
    return "";
  },
});
