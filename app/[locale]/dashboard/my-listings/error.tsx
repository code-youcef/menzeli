"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
        <AlertCircle className="h-10 w-10 text-red-600" />
      </div>
      <h2 className="text-xl font-semibold text-zinc-900">
        Something went wrong!
      </h2>
      <p className="text-center text-sm text-zinc-500 max-w-md">
        We encountered an error while loading your listings. Please try again later.
      </p>
      <Button onClick={() => reset()} variant="outline" className="mt-2">
        Try again
      </Button>
    </div>
  );
}
