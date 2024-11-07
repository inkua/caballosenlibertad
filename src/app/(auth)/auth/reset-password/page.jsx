import React from "react";
import Link from "next/link";
import ResetPasswordForm from "../components/ResetPasswordForm";

function Password() {
  return (
    <div classNameName="bg-white dark:bg-gray-900">
      <div classNameName="flex justify-center h-screen">
        <div
          classNameName="hidden bg-cover lg:block lg:w-2/3"
          style={{ backgroundImage: "url(/auth/reset_password.jpg)" }}>
          <div classNameName="flex items-center h-full px-20 bg-gray-900 bg-opacity-20"></div>
        </div>

        <div classNameName="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div classNameName="flex-1">
            <div classNameName="text-center">
              <div classNameName="flex justify-center mx-auto">
                <img
                  classNameName="w-auto h-7 sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </div>

              <h2 classNameName="mt-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                Restablecer contraseña
              </h2>
            </div>
            <div classNameName="mt-8">
              <ResetPasswordForm />
            </div>
            <Link
              href={"/auth"}
              classNameName="block mt-6 text-sm text-center text-gray-400 hover:text-gray-300 transition-colors duration-75">
              Volver a login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
