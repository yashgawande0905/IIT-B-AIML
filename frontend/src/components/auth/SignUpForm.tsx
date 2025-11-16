import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">

      {/* REMOVE BACK BUTTON */}
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10"></div>

      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign up!
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* First Name */}
                <div className="sm:col-span-1">
                  <Label>First Name *</Label>
                  <Input placeholder="Enter your first name" />
                </div>

                {/* Last Name */}
                <div className="sm:col-span-1">
                  <Label>Last Name *</Label>
                  <Input placeholder="Enter your last name" />
                </div>

              </div>

              {/* Email */}
              <div>
                <Label>Email *</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              {/* Password */}
              <div>
                <Label>Password *</Label>
                <div className="relative">
                  <Input
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="size-5 text-gray-500" />
                    ) : (
                      <EyeCloseIcon className="size-5 text-gray-500" />
                    )}
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox
                  className="w-5 h-5"
                  checked={isChecked}
                  onChange={setIsChecked}
                />
                <p className="text-gray-500 dark:text-gray-400">
                  By creating an account, you agree to the{" "}
                  <span className="text-gray-800 dark:text-white">
                    Terms & Conditions
                  </span>
                </p>
              </div>

              {/* SUBMIT BUTTON */}
              <div>
                <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-brand-500 hover:bg-brand-600">
                  Sign Up
                </button>
              </div>

            </div>
          </form>

          {/* REMOVE "Already have account" redirection */}
          <div className="mt-5"></div>
        </div>
      </div>
    </div>
  );
}
