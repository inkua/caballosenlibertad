import { getEventsPerPage } from "@/DAO/events.db";

import Pagination from "../componets/Pagination/Pagination";
import SearchBar from "../componets/SearchBar/SearchBar";
import AddBtn from "./components/AddBtn/AddBtn";
import Table from "./components/Table/Table";

async function Events({ searchParams }) {
    const { page } = searchParams
    let data = {}

    if (page) {
        data = await getEventsPerPage(Number(page), 10)
    } else {
        data = await getEventsPerPage(1, 10)
    }

    return (
        <>
            <header className="bg-[#21DDD4] shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="w-full flex flex-row items-center">
                        <div
                            className="w-10 md:w-14 aspect-square bg-no-repeat bg-contain bg-center mr-4 inline-block"
                            style={{ backgroundImage: "url('/admin/event.png')" }}
                        ></div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary inline-block">Eventos</h1>
                    </div>
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
