import { signIn } from "next-auth/react";

export default function Login() {
  const handleSignIn = () => {
    signIn("github");
  };
  return (
    <div className="flex justify-center py-32">
      <button
        type="button"
        className="p-2 rounded-lg text-md text-sky-300 shadow-lg shadow-sky-400"
        onClick={handleSignIn}
      >
        Sign in
      </button>
    </div>
  );
}
