'use client'

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ItemTable from "../ItemTable/ItemTable";
import Pagination from "../../../componets/Pagination/Pagination";

const USERS_PER_PAGE = 5;

const headers = [
    { id: 1, title: "Nombre" },
    { id: 2, title: "Correo" },
    { id: 3, title: "Fecha de creación" },
    { id: 4, title: "Ultima modificación" },
    { id: 5, title: "Actions" },
];

function Table({ users }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const [paginatedUsers, setPaginatedUsers] = useState([]);

    useEffect(() => {
        const start = (currentPage - 1) * USERS_PER_PAGE;
        const end = start + USERS_PER_PAGE; 
        setPaginatedUsers(users.slice(start, end)); 
    }, [users, currentPage]);

    const handlePageChange = (page) => {
        const newUrl = `${pathname}?page=${page}`;
        window.history.pushState(null, "", newUrl);
    };

    return (
        <section className="flex flex-col mt-6 px-4 sm:px-6 md:px-0">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 overflow-y-scroll">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="min-h-[350px] overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-y-scroll">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-y-scroll">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr className="w-full">
                                    {headers.map((item) => (
                                        <th
                                            key={item.id}
                                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            {item.title}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                {paginatedUsers.length > 0 ? (
                                    paginatedUsers.map((user) => (
                                        <ItemTable data={user} key={user.id} />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={headers.length} className="text-center py-4">
                                            No se encontraron usuarios.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Pagination
                totalUsers={users.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </section>
    );
}

export default Table;