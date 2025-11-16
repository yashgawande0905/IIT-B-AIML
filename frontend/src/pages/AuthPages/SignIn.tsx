import AuthLayout from "./AuthPageLayout";
import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log("Login pressed:", email, password);
  };

  return (
    <>
      <PageMeta title="Sign In" description="Login to dashboard" />

      <AuthLayout>
        {/* REMOVE mt-10 and outer div - keep card centered */}
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-2 dark:text-white">
            Sign In
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Access your dashboard
          </p>

          <form onSubmit={login} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg
                           dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg
                           dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <button
              className="w-full py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600"
            >
              Sign In
            </button>

          </form>
        </div>
      </AuthLayout>
    </>
  );
}
