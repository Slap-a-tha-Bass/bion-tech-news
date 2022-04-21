import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex justify-center py-32">
      <p className="text-right text-xs text-gray-500">Not signed in</p>
      <button
        className="p-2 rounded-lg text-md text-sky-300 shadow-lg shadow-sky-400"
        onClick={() => signIn("github")}
      >
        Sign in
      </button>
    </div>
  );
}
