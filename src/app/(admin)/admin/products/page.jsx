import { getProductsPerPage } from "@/DAO/products.db";


import SearchBar from "../componets/SearchBar/SearchBar"
import BtnProduct from "./components/BtnProduct/BtnProduct"
import PaginationProduct from "./components/PaginationProduct/PaginationProduct";
import TableProduct from "./components/TableProduct/TableProduct"

async function Products({ searchParams }) {
  const { page } = searchParams
  let data = {}

  if (page) {
    data = await getProductsPerPage(Number(page))
  } else {
    data = await getProductsPerPage()
  }


  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Caballos
          </h1>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <BtnProduct />
          <SearchBar />
        </div>


        <TableProduct data={data.list} />

        <PaginationProduct data={data} />
      </main>
    </>
  )

}

export default Products;
