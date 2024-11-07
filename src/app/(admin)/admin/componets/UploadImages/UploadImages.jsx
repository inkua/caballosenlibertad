"use client";
import { handleImageUpload, options } from "@/utils/imageCompressionFunctions";

const UploadImages = (props) => {
  const { image, setImage } = props;

  // La función que comprime imágenes devuelve un archivo Blob.
  const imageSrc = () => {
    if (image instanceof File || image instanceof Blob) {
      return URL.createObjectURL(image);
    }
    return image;
  };

  const handleUploadClick = async (event) => {
    event.preventDefault();
    const compressedFile = await handleImageUpload(event, options);
    setImage(compressedFile);
  };

  return (
    <>
      {/* Nuevo campo para subir imagen */}
      <div classNameName="space-y-2">
        <label
          htmlFor="productImage"
          classNameName="block text-sm font-medium text-gray-700">
          Imagen del Producto
        </label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          accept="image/*"
          onChange={handleUploadClick}
          classNameName="mt-1 block w-full text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>

      {/* Vista previa de la imagen si está disponible */}
      {image && (
        <div classNameName="mt-4">
          <p classNameName="text-sm text-gray-700">
            Vista previa de la imagen:
          </p>
          <img
            src={imageSrc()}
            alt="Vista previa"
            classNameName="w-full h-auto mt-2 rounded-lg"
            style={{
              maxWidth: "50%",
              maxHeight: "300px",
            }}
          />
        </div>
      )}
    </>
  );
};

export default UploadImages;
