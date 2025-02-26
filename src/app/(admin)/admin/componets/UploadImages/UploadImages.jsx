"use client"

import { handleImageUpload } from "@/utils/imageCompressionFunctions";
import DisplayImage from "./components/DisplayImage";
import { useEffect } from "react";

const UploadImages = ({ props }) => {
    const { image, setImage, url, loading, setLoading } = props;

    // La función que comprime imágenes devuelve un archivo Blob.
    const imageSrc = () => {
        if (image instanceof File || image instanceof Blob) {
            return URL.createObjectURL(image);
        }
        return image;
    };

    const handleUploadClick = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const compressedFile = await handleImageUpload(event);
            setImage(compressedFile);
        } catch (error) {
            console.error("Error al cargar la imagen:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
    },[url])

    return (
        <>
            <div className="space-y-2">
                <label
                    htmlFor="productImage"
                    className="block text-sm font-medium text-gray-700">
                    Imagen del Producto
                </label>
                <input
                    required
                    disabled={loading}
                    type="file"
                    id="productImage"
                    name="productImage"
                    accept="image/*"
                    onChange={handleUploadClick}
                    className="mt-1 block w-full text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
            </div>

            {loading ? (
                <div className="mt-4">
                    <p className="text-sm text-gray-700">Optimizando imágen, por favor espere.</p>
                    <p className="text-4xl text-blue-600">Optimizando...</p>
                </div>
            ) : (
                <>
                    {/* Vista previa de la imagen si está disponible */}
                    {image && (
                        <DisplayImage imgSrc={imageSrc()}/>
                    )}

                    {/* Imagen por defecto si no hay URL ni imagen seleccionada */}
                    {!url && !image && (
                        <DisplayImage imgSrc={"https://res.cloudinary.com/diiavhlq4/image/upload/v1736874938/general-1736874938068.webp"} />
                    )}

                    {/* imgUrl de la entidad si no hay una nueva imagen seleccionada */}
                    {url && !image && (
                        <DisplayImage imgSrc={url}/>
                    )}
                </>
            )}
        </>
    );
};

export default UploadImages;
