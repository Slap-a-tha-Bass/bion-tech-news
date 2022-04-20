import { useSession } from "next-auth/react";
import React from "react";

export default function AuthWrapper ({children}: {children: React.ReactNode}) {

    const { status } = useSession();

    if (status === "loading") {
        return null;
    }

  return (
    <>
      {children}
    </>
  );


}