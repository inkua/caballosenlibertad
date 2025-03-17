import { getAdminsPerPage } from "@/DAO/admins.db"

import Pagination from "../componets/Pagination/Pagination"
import SearchBar from "../componets/SearchBar/SearchBar"
import AdminAddBtn from "./components/AdminAddBtn/AdminAddBtn"
import AdminTable from "./components/AdminTable/AdminTable"

export const metadata = {
    title: "Administradores",
    description: "Panel de administradores.",
}


async function Administradores({searchParams}) {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getAdminsPerPage(Number(page), 10)
    } else {
        data = await getAdminsPerPage(1, 10)
    }
    return (
        <>
            <header className="bg-[#B4EFAF] shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="w-full flex flex-row items-center">
                        <div
                            className="w-10 md:w-14 aspect-square bg-no-repeat bg-contain bg-center mr-4 inline-block"
                            style={{ backgroundImage: "url('/admin/admin.png')" }}
                        ></div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary inline-block">Administradores</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <AdminAddBtn />
                    <SearchBar />
                </div>

                <AdminTable data={data.list} />

                <Pagination data={data} />
            </main>
        </>
    )
}

export default Administradores
