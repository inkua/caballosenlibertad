import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function Pagination() {
  return (
    <div classNameName="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4 md:mt-8 rounded-lg">
      <div classNameName="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          classNameName="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </a>
        <a
          href="#"
          classNameName="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </a>
      </div>
      <div classNameName="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p classNameName="text-sm text-gray-700">
            Showing <span classNameName="font-medium">1</span> to{" "}
            <span classNameName="font-medium">10</span> of{" "}
            <span classNameName="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            classNameName="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              classNameName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span classNameName="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" classNameName="h-5 w-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              classNameName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              1
            </a>
            <a
              href="#"
              classNameName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              2
            </a>
            <a
              href="#"
              classNameName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
              3
            </a>
            <span classNameName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              classNameName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
              8
            </a>
            <a
              href="#"
              classNameName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              9
            </a>
            <a
              href="#"
              classNameName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              10
            </a>
            <a
              href="#"
              classNameName="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span classNameName="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" classNameName="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
