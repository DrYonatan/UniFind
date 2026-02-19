"use client";
import { signup } from "@/app/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 my-10 slide-in-up">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Create an account
      </h1>
      <p className="text-gray-600 mb-6">
        Join us by filling out the form below
      </p>

      <form action={action} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          {state?.errors?.name && (
            <p className="text-red-500 text-xs">{state.errors.name}</p>
          )}

          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          {state?.errors?.email && (
            <p className="text-red-500 text-xs">{state.errors.email}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          {state?.errors?.password &&
            state?.errors?.password.map((error, index) => (
              <p key={index} className="text-red-500 text-xs">
                {error}
              </p>
            ))}

          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-black text-white py-2.5 font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
