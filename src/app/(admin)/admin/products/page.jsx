import { getProducts } from "@/DAO/products.db";

import Pagination from "../componets/Pagination/Pagination"
import SearchBar from "../componets/SearchBar/SearchBar"
import BtnProduct from "./components/BtnProduct/BtnProduct"
import TableProduct from "./components/TableProduct/TableProduct"

async function Products() {
    let data = await getProducts()

    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Productos</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <BtnProduct />
                    <SearchBar />
                </div>

                <TableProduct data={data} />

                <Pagination />
            </main>
        </>
    )
}

export default Products
