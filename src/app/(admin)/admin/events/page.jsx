import { getEvents } from "@/DAO/events.db";

import AddBtn from "./components/AddBtn/AddBtn";
import SearchBar from "../componets/SearchBar/SearchBar";
import Pagination from "../componets/Pagination/Pagination";
import Table from "./components/Table/Table";

async function Users() {
  let data = await getEvents();

  return (
    <>
      <header classNameName="bg-white shadow">
        <div classNameName="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 classNameName="text-3xl font-bold tracking-tight text-gray-900">
            Usuarios
          </h1>
        </div>
      </header>

      <main classNameName="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div classNameName="sm:flex sm:items-center sm:justify-between">
          <AddBtn />
          <SearchBar />
        </div>
        <Table data={data} />

        <Pagination />
      </main>
    </>
  );
}

export default Users;
