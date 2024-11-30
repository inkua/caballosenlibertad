import { getEventsPerPage } from "@/DAO/events.db";

import Pagination from "../componets/Pagination/Pagination";
import SearchBar from "../componets/SearchBar/SearchBar";
import AddBtn from "./components/AddBtn/AddBtn";
import Table from "./components/Table/Table";

async function Events({ searchParams }) {
    const { page } = searchParams
    let data = {}

    if (page) {
        data = await getEventsPerPage(Number(page))
    } else {
        data = await getEventsPerPage()
    }

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Eventos</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <AddBtn />
                    <SearchBar />
                </div>

                <Table data={data.list} />

                <Pagination data={data} />
            </main>
        </>
    )
}

export default Events
