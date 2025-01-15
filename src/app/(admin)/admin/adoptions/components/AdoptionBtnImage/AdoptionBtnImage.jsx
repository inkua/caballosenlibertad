"use client"

import AdoptionImgModal from '../AdoptionImgModal/AdoptionImgModal'

function AdoptionBtnImage({ imgUrl, open, setOpen, adoptionId }) {

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                Imagen
            </button>

            <AdoptionImgModal data={{ open, setOpen, imgUrl, adoptionId }} />
        </>
    )
}

export default AdoptionBtnImage
