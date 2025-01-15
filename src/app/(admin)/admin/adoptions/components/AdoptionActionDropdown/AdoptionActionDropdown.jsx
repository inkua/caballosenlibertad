"use client";
import useDropdownBlur from "@/utils/useDropDownBlur";
import { useState } from "react";
import AdoptionBtnEdit from "../AdoptionBtnEdit/AdoptionBtnEdit";
import AdoptionBtnDelete from "../AdoptionBtnDelete/AdoptionBtnDelete";
import AdoptionBtnImage from "../AdoptionBtnImage/AdoptionBtnImage";

function AdoptionActionDropdown({ data }) {
    const [open, setOpen] = useState(false)
    const { toggle, setToggle, menuRef } = useDropdownBlur(false, open);
    return (
        <div className="relative" ref={menuRef}>
            <button
                className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
                onClick={() => setToggle(!toggle)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                </svg>
            </button>
            {toggle && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1">


                    <div className="py-1" role="none">
                        <AdoptionBtnEdit open={open} setOpen={setOpen} data={data}/>
                        <AdoptionBtnImage imgUrl={data?.imgUrl} open={open} setOpen={setOpen} adoptionId={data.id}/>
                    </div>
                    <div className="py-1" role="none">
                        <AdoptionBtnDelete aid={data.id}/>
                    </div>

                </div>
            )}
        </div>
    )
}

export default AdoptionActionDropdown
