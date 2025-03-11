import FormLogin from "./components/FormLogin";
import Link from "next/link";

function Login() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{ backgroundImage: "url(/auth/authLogin.webp)"}}
                >
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Autenticación - Caballos En Libertad
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img
                                    className="w-auto h-7 sm:h-8"
                                    src="/logo-blanco.png"
                                    alt="Caballos en Libertad Logo"
                                />
                            </div>

                            <h2 className="mt-2 text-xl font-bold text-gray-700 dark:text-gray-300">
                                Inicio de sesión
                            </h2>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Inicia sesión para acceder a tu cuenta
                            </p>
                        </div>
                        <div className="mt-8">
                            <FormLogin />
                        </div>

                        <p className="mt-6 text-sm text-center text-gray-400">
                            ¿Quieres ser parte de nuestra familia?
                        </p>
                        <p className="text-center">
                            <Link
                                href="/voluntariado"
                                className="text-blue-500 focus:outline-none focus:underline hover:underline">
                                Sé voluntario
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
