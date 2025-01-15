'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter } from 'next/navigation';


function AdoptionPagination({ data }) {
    const { currentPage, pageSize, totalPages } = data
    const pathname = usePathname();
    const router = useRouter()

    const goToPage = (page) => {
        const newUrl = `${pathname}?page=${page}`
        router.push(newUrl)
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4 md:mt-8 rounded-lg">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                    Página <span className="font-medium">{currentPage}</span> de{' '}
                    <span className="font-medium">{totalPages == 0 ? 1 : totalPages}</span>
                </p>
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        disabled={currentPage === 1}
                    >
                        <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${index + 1 === currentPage
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                                } focus:z-20 focus:outline-offset-0`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                </nav>
            </div>
        </div>
    );

}

export default AdoptionPagination
