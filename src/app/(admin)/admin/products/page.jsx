import { getProducts } from "@/DAO/products.db";

import Pagination from "../componets/Pagination/Pagination";
import SearchBar from "../componets/SearchBar/SearchBar";
import BtnProduct from "./components/BtnProduct/BtnProduct";
import TableProduct from "./components/TableProduct/TableProduct";

async function Products() {
  let data = await getProducts();

  return (
    <>
      <header classNameName="bg-white shadow">
        <div classNameName="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 classNameName="text-3xl font-bold tracking-tight text-gray-900">
            Caballos
          </h1>
        </div>
      </header>

      <main classNameName="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div classNameName="sm:flex sm:items-center sm:justify-between">
          <BtnProduct />
          <SearchBar />
        </div>

        <TableProduct data={data} />

        <Pagination />
      </main>
    </>
  );
}

export default Products;
