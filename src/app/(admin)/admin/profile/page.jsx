import { getAdminByEmail } from "@/DAO/admins.db";
import Link from "next/link";
import ProfileImage from "./components/ProfileImage";


async function ProductDetail({ searchParams }) {
    const { user } = searchParams
    let data = { name: "none", type: "none", email: "none" }

    if (user) {
        const response = await getAdminByEmail(user)
        if (response) {
            data = response
        }
    }

    return (
        <main className="container mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:py-20">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Perfil Del Usuario
                </h3>
                <div className="flex items-center gap-x-6">
                    <ProfileImage type={data.type}/>
                    <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                            { data.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                            Administrador
                        </p>
                    </div>
                </div>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    Información:
                </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-gray-900">
                            Nombre
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {data.name}
                        </dd>
                    </div>
                    <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-gray-900">
                            Rol
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {data.type}
                        </dd>
                    </div>
                    <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-gray-900">
                            Correo
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {data.email}
                        </dd>
                    </div>
                    <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-base font-medium leading-6 text-gray-900">
                            Cambiar contraseña
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <Link className="text-green-600" href='/admin/settings'>Cambiar</Link>
                        </dd>
                    </div>
                </dl>
            </div>
        </main>
    );
}

export default ProductDetail;
