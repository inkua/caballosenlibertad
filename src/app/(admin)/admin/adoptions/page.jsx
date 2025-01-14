import { getAdoptionsPerPage } from "@/DAO/adoptions.db"
import SearchBar from "../componets/SearchBar/SearchBar"
import AdoptionAddBtn from "./components/AdoptionAddBtn/AdoptionAddBtn"
import AdoptionTable from "./components/AdoptionTable/AdoptionTable"
import AdoptionPagination from "./components/AdoptionPagination/AdoptionPagination"

async function Adoption({searchParams}) {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getAdoptionsPerPage(Number(page))
    } else {
        data = await getAdoptionsPerPage()
    }
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Adopciones</h1>
                </div>
            </header>
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <AdoptionAddBtn />
                    <SearchBar />
                </div>

                <AdoptionTable data={data.list} />

                <AdoptionPagination data={data} />
            </main>
        </>
    )
}

export default Adoption
