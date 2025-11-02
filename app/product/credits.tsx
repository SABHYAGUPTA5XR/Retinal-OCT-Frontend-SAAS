import Link from "next/link";
import React from "react";

const Credits = ({ credits }: { credits: number }) => {
  return (
    <div className="mt-6 mb-4 text-center">
      <div className="text-gray-700">
        <span className="block text-lg sm:text-xl font-medium">
          Credits available
        </span>
        <span className="block mt-1 text-2xl sm:text-3xl font-extrabold text-indigo-700">
          {credits}
        </span>
      </div>

      <div className="mt-3">
        <Link href="/pricing" className="text-indigo-600 hover:underline text-sm sm:text-base">
          Buy more credits
        </Link>
      </div>
    </div>
  );
};

export default Credits;
