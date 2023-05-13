"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error.message);
  }, [error]);

  return (
    <div>
      {(() => {
        if (error.message === "Not Found") {
          return (
            <>
              <h2 className="text-[#2D2D2D] text-lg font-bold">
                No Definitions Found
              </h2>
              <div className="text-[#757575] mt-3">
                Sorry pal, we couldn&apos;t find definitions for the word you
                were looking for. You can try the search again at later time or
                head to the web instead.
              </div>
            </>
          );
        }

        return (
          <>
            <h2 className="text-[#2D2D2D] text-lg font-bold">
              Something went wrong!
            </h2>
            <div className="text-[#757575] mt-3">{error.message}</div>
            <button
              className="mt-5"
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>
          </>
        );
      })()}
    </div>
  );
}
