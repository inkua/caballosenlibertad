"use client";


import BtnEditUser from "../BtnEditEvent/BtnEditEvent"
import BtnDeleteUser from "../BtnDeleteEvent/BtnDeleteEvent"
import useDropdownBlur from "@/utils/useDropDownBlur";

function ActionDropdownProduct({ data }) {
    const { toggle, setToggle, menuRef } = useDropdownBlur();

    return (
        <div className="relative" ref={menuRef}>
            <button className="px-1 py-1 text-gray-500 dark:text-gray-300 transition-colors duration-200 rounded-lg hover:bg-gray-100 hover:text-gray-500"
                onClick={() => setToggle(!toggle)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </button>
            {
                toggle &&
                <div className="absolute right-0  z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div role="none">
                        <BtnEditUser data={data} />
                    </div>
                    <div role="none">
                        <BtnDeleteUser data={data} />
                    </div>
                </div>
            }
        </div>
    )

}

export default ActionDropdownProduct;
