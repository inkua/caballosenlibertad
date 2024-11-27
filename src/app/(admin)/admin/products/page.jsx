import { getProductsPerPage } from "@/DAO/products.db";

<<<<<<< HEAD
import Pagination from "../componets/Pagination/Pagination";
import SearchBar from "../componets/SearchBar/SearchBar";
import BtnProduct from "./components/BtnProduct/BtnProduct";
import TableProduct from "./components/TableProduct/TableProduct";

async function Products() {
  let data = await getProducts();
=======
import SearchBar from "../componets/SearchBar/SearchBar"
import BtnProduct from "./components/BtnProduct/BtnProduct"
import PaginationProduct from "./components/PaginationProduct/PaginationProduct";
import TableProduct from "./components/TableProduct/TableProduct"

async function Products({searchParams}) {
    const {page} = searchParams
    let data = {}

    if(page){
        data = await getProductsPerPage(Number(page))
    }else{
        data = await getProductsPerPage()
    }
>>>>>>> 03dcf66 (add:start pagination)

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

<<<<<<< HEAD
        <TableProduct data={data} />

        <Pagination />
      </main>
    </>
  );
=======
                <TableProduct data={data.list} />

                <PaginationProduct data={data}/>
            </main>
        </>
    )
>>>>>>> 03dcf66 (add:start pagination)
}

export default Products;
