import LoginForm from "@/app/components/login-form";
import { isLoggedIn } from "@/app/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const isLoggedInValue: boolean = await isLoggedIn();

  if (isLoggedInValue) redirect("/");

  return (
    <div className="h-full flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 my-10 slide-in-up">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Log in to your account
        </h1>

        <LoginForm />

        <p className="flex justify-center gap-1 text-center text-sm text-gray-600 mt-6">
          Don't have an account?
          <Link
            href="/signup"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
