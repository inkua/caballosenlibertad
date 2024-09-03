import AddBtn from "../componets/AddBtn/AddBtn"
import Pagination from "../componets/Pagination/Pagination"
import SearchBar from "../componets/SearchBar/SearchBar"
import Table from "../componets/Table/Table"

function Products() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Productos</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <AddBtn />
                    <SearchBar />
                </div>

                <Table />

                <Pagination />
            </main>
        </>
    )
}

export default Products
