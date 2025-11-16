import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import { useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    console.log("SignUp pressed:", fname, lname, email, password);
  };

  return (
    <>
      <PageMeta title="Sign Up" description="Create your account" />

      <AuthLayout>
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-2 dark:text-white">
            Sign Up
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Create a new account
          </p>

          <form onSubmit={signup} className="space-y-5">

            {/* First + Last Name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg
                             dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter first name"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg
                             dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter last name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

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

            {/* Submit Button */}
            <button
              className="w-full py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600"
            >
              Sign Up
            </button>

          </form>
        </div>
      </AuthLayout>
    </>
  );
}
