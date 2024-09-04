import ItemTable from "../ItemTable/ItemTable"

const headers = [
    {id:1, title:"filename"},
    {id:2, title:"File size"},
    {id:3, title:"Date uploaded"},
    {id:4, title:"Last updated"},
    {id:5, title:"Uploaded by"},
    {id:6, title:"Actions"},
]

function Table() {

    return (
        <section className="flex flex-col mt-6 px-4 sm:px-6 md:px-0">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 overflow-y-scroll">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="min-h-[350px] overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-y-scroll">
                        {/* Table */}
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-y-scroll">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    {
                                        headers.map((item)=>
                                            <th scope="col" key={item.id}
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                {item.title}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                {/* Item List */}
                                <ItemTable />
                                <ItemTable />

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table
