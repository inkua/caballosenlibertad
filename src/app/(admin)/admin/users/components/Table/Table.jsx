import ItemTable from "../ItemTable/ItemTable";

const headers = [
  { id: 1, title: "Nombre" },
  { id: 2, title: "Correo" },
  { id: 3, title: "Fecha de creación" },
  { id: 4, title: "Ultima modificación" },
  { id: 5, title: "Actions" },
];

function Table({ data }) {
  return (
    <section classNameName="flex flex-col mt-6 px-4 sm:px-6 md:px-0">
      <div classNameName="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 overflow-y-scroll">
        <div classNameName="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div classNameName="min-h-[350px] overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-y-scroll">
            {/* Table */}
            <table classNameName="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-y-scroll">
              <thead classNameName="bg-gray-50 dark:bg-gray-800">
                <tr classNameName="w-full">
                  {headers.map((item) => (
                    <th
                      scope="col"
                      key={item.id}
                      classNameName="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      {item.title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody classNameName="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {data.map((item) => (
                  <ItemTable data={item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
