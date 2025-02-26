import { getAdoptionsPerPage } from "@/DAO/adoptions.db"
import SearchBar from "../componets/SearchBar/SearchBar"
import AdoptionAddBtn from "./components/AdoptionAddBtn/AdoptionAddBtn"
import AdoptionTable from "./components/AdoptionTable/AdoptionTable"
import Pagination from "../componets/Pagination/Pagination"

async function Adoption({searchParams}) {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getAdoptionsPerPage(Number(page), 10)
    } else {
        data = await getAdoptionsPerPage(1, 10)
    }
    return (
        <>
            <header className="bg-primary2 shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="w-full flex flex-row items-center">
                        <div
                            className="w-10 md:w-14 aspect-square bg-no-repeat bg-contain bg-center mr-4 inline-block"
                            style={{ backgroundImage: "url('/admin/adoption.png')" }}
                        ></div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary inline-block">Adopciones</h1>
                    </div>
                </div>
            </header>
            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <AdoptionAddBtn />
                    <SearchBar />
                </div>

                <AdoptionTable data={data.list} />

                <Pagination data={data} />
            </main>
        </>
    )
}

export default Adoption
