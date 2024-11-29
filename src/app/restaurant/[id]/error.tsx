'use client';

import { useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function Error({ error, reset }: { error: Error, reset: () => void }) {

  useEffect(() => {
    console.error('Error from error boundary:', error);
  }, [error]);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="p-6 border-red-200 bg-red-50">
        <div className="flex items-center gap-2 text-red-700">
          <ExclamationTriangleIcon className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Something went wrong</h2>
        </div>
        <p className="mt-2 text-red-600">
          {error.message || 'Failed to load restaurant details. Please try again later.'}
        </p>
        <div className="mt-4">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Try Again
          </button>
        </div>
      </Card>
    </div>
  );
}