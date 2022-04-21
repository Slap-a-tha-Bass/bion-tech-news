import { signIn, useSession } from "next-auth/react";
import Router from "next/router";

export default function Login() {
  const { status } = useSession();
  const handleSignIn = () => {
    signIn("github", {
      callbackUrl: "https://bion-tech.vercel.app/",
    });
  };
  console.log({ status });
  if (status === "authenticated") {
    Router.push("/");
  }
  return (
    <div className="flex justify-center py-32">
      <button
        type="button"
        className="p-2 rounded-lg text-md text-sky-300 shadow-lg shadow-sky-400"
        onClick={handleSignIn}
      >
        Login with GitHub
      </button>
    </div>
  );
}
