"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h2 className="text-[#2D2D2D] text-lg font-bold">
        Something went wrong!
      </h2>
      <div className="text-[#757575] mt-3">Please try again...</div>
      <button
        className="mt-5"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
