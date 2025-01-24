import { getAdminsPerPage } from "@/DAO/admins.db"
import SearchBar from "../componets/SearchBar/SearchBar"
import AdminAddBtn from "./components/AdminAddBtn/AdminAddBtn"
import AdminTable from "./components/AdminTable/AdminTable"
import Pagination from "../componets/Pagination/Pagination"


async function Administradores({searchParams}) {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getAdminsPerPage(Number(page))
    } else {
        data = await getAdminsPerPage()
    }
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Administradores</h1>
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
