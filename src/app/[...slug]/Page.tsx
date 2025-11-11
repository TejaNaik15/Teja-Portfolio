"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CatchErrorRoutes() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center  px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-4">
        Oops! This page doesn&apos;t exist.
      </h1>
      <p className="text-sm md:text-base mb-4 text-neutral-200">
        Redirecting you back to the homepage...
      </p>
      <div className="w-8 h-8 border-4 border-neutral-200 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
