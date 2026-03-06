"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

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
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <AlertTriangle className="h-8 w-8 text-red-600" />
      </div>
      <h2 className="text-2xl font-bold text-zinc-900">Something went wrong!</h2>
      <p className="max-w-md text-zinc-500">
        We encountered an error while loading the listings. Please try again or check your internet connection.
      </p>
      <div className="mt-4 text-red-600">{error.message}</div>
      <p className="mt-4 text-zinc-500">
        If the error persists, please contact us at{" "}
        <a href="mailto:support@menzeli.com" className="text-blue-600">
          support@menzeli.com
        </a>
        <br />
        or report it to your browser's developer tools.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="default">
          Try again
        </Button>
        <Button onClick={() => window.location.reload()} variant="outline">
          Reload Page
        </Button>
      </div>
    </div>
  );
}
