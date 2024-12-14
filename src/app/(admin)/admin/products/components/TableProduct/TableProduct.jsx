import ItemTable from "../ItemTableProduct/ItemTableProduct";

const headers = [
    { id: 1, title: "Name" },
    { id: 2, title: "Category" },
    { id: 3, title: "Description" },
    { id: 4, title: "Price" },
    { id: 5, title: "Actions" },
];
function TableProduct({ data }) {
    return (
        <section className="flex flex-col mt-6 px-4 sm:px-6 md:px-0">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="min-h-[350px] overflow-hidden border border-gray-200 dark:border-gray-200 md:rounded-lg overflow-y-scroll">
                        {/* Table */}
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-200 overflow-y-scroll">
                            <thead className="bg-white text-black divide-y divide-gray-600">
                                <tr>
                                    {
                                        headers.map((item) =>
                                            <th scope="col" key={item.id}
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-700 dark:text-gray-700">
                                                {item.title}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>

                            <tbody className="bg-white text-black divide-y divide-gray-200">
                                {
                                    data.length === 0 ?
                                        (<p className="text-black">Lista de items vacía</p>)
                                        :
                                        (data.map((item) => (
                                            <ItemTable key={item.id} data={item} />
                                        ))
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TableProduct;
