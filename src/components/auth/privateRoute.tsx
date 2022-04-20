import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [router, status]);

  if (status === "unauthenticated") {
    return (
      <>
        <p className="text-right text-xs text-gray-500">Not signed in</p>
        <div className="flex justify-center py-32">
          <button
            className="p-2 rounded-lg text-md text-sky-300 shadow-lg shadow-sky-400"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
        <div className="flex justify-center">
          <div className="rounded-full shadow-xl shadow-violet-400 flex justify-center p-4 w-3/4">
            <Image
              src="/biotech-deals.jpeg"
              alt="biotech deals"
              width={1200}
              height={400}
              placeholder="blur"
              blurDataURL="/biotech-deals.jpeg"
              priority
              className="opacity-90 rounded-full"
            />
          </div>
        </div>
        <div className="h-80 mb-64">
          <div
            className="flex justify-center"
            style={{ marginBottom: "-4rem" }}
          >
            <Image src="/bion-logo.png" width={250} height={250} alt="logo" />
          </div>
          <h4 className="text-center text-2xl text-sky-600">
            Best Provider for Biotech News
          </h4>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
