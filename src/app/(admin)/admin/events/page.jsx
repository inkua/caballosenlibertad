import { getEvents } from "@/DAO/events.db";

import AddBtn from "./components/AddBtn/AddBtn"
import SearchBar from "../componets/SearchBar/SearchBar"
import Pagination from "../componets/Pagination/Pagination"
import Table from "./components/Table/Table"

async function Users() {
    let data = await getEvents();

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Eventos</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <AddBtn />
                    <SearchBar />
                </div>
                <Table data={data} />

                <Pagination />
            </main>
        </>
    )
}

export default Users
