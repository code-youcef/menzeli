import { useQuery } from "@tanstack/react-query";
import { ListingApi } from "@/api/generated-client";
import { apiConfig } from "@/lib/api-config";

const listingApi = new ListingApi(apiConfig);

export function useListings(params?: { perPage?: string }) {
  return useQuery({
    queryKey: ["listings", params],
    queryFn: async () => {
      const response = await listingApi.listingsIndex(params);
      return response;
    },
  });
}

export function useListing(id: number) {
  return useQuery({
    queryKey: ["listing", id],
    queryFn: async () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      console.log({headers})

      const response = await fetch(`${apiConfig.basePath}/listings/${id}`, {
        headers
      });

      if (!response.ok) {
        throw new Error("Failed to fetch listing");
      }
      return response.json();
    },
    enabled: !!id,
  });
}
