import UploadImages from "@/app/(admin)/admin/componets/UploadImages/UploadImages"
import { useState } from "react"

const StoryImgModal = ({ data }) => {

    const { open, setOpen, imgUrl, adoptionId } = data
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(imgUrl)
    const [loading, setLoading] = useState(false)

    const handlerSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', image)
        formData.append('id', adoptionId)

        const response = await fetch('/api/stories/image', {
            method: 'POST',
            body: formData,
        });

        if (response.status == 200) {
            const result = await response.json();
            setUrl(result.data)
            alert('Imagen añadida correctamente')
            console.log("url: ", result.data)
            setOpen(false)
        } else {
            alert('No se pudo realizar la operación')
        }
    }

    const onClose = () => {
        setImage(null)
        setOpen(false)
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
                                <UploadImages props={{ image, setImage, url, loading, setLoading }} />
                            </div>

                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    disabled={(loading || !image)}
                                    type="submit"
                                    className="flex items-center px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50 ">
                                    <span className="mx-1">Actualizar</span>
                                </button>

                                <button
                                    disabled={loading}
                                    type="button"
                                    onClick={() => onClose()}
                                    className="flex items-center px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 disabled:opacity-75 ">
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

export default StoryImgModal
