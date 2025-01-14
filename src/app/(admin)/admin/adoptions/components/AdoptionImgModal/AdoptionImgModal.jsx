import { useState } from 'react'
import UploadImages from '../../../componets/UploadImages/UploadImages'

function AdoptionImgModal({ data }) {

    const { open, setOpen, imgUrl, adoptionId } = data
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(imgUrl)


    const handlerSubmit = async (e)=>{
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', image)
        formData.append('id', adoptionId)

        const response = await fetch('/api/adoptions/image', {
            method: 'POST',
            body: formData,
        });

        if (response.status == 200) {
            const result = await response.json();
            setImage(result.data)
            alert('Imagen añadida correctamente')
            console.log("url: ", result.data)
            setOpen(false)
        }else{
            alert('No se pudo realizar la operación')
        }

    }

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-[500px] lg:w-[900px] max-h-[95vh] overflow-y-auto">
                        <form onSubmit={(e) => handlerSubmit(e)}>
                            <h2 className="text-xl font-bold mb-4">
                                Actualizar imagen
                            </h2>

                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <UploadImages props={{ image, setImage, url, setUrl }} />
                            </div>

                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex items-center px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500">
                                    <span className="mx-1">Actualizar</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-500">
                                    <span className="mx-1">Cancelar</span>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </>
    )
}

export default AdoptionImgModal
