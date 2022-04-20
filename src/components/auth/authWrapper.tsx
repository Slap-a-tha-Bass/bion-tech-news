import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";
import PrivateRoute from "./privateRoute";

const authRoutes = ["/", "/reddit-news", "/news-api-org", "/news-data-io"];

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {authRoutes.includes(router.pathname) ? (
        <PrivateRoute>{children}</PrivateRoute>
      ) : (
        children
      )}
    </>
  );
}
