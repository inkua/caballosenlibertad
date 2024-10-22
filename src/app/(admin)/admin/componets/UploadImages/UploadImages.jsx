"use client";
import { handleImageUpload, options } from "@/utils/imageCompressionFunctions";

const UploadImages = (props) => {
  const { image, setImage } = props;

  const imageSrc = () => {
    if (image instanceof File) {
      return URL.createObjectURL(image)
    }
    return image
  };

  const handleUploadClick = async (event) => {
    event.preventDefault();
    const compressedFile = await handleImageUpload(event, options);
    setImage(compressedFile);
  };
  return (
    <>
      {/* Nuevo campo para subir imagen */}
      <div className="space-y-2">
        <label
          htmlFor="productImage"
          className="block text-sm font-medium text-gray-700">
          Imagen del Producto
        </label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          accept="image/*"
          onChange={handleUploadClick}
          className="mt-1 block w-full text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>

      {/* Vista previa de la imagen si está disponible */}
      {image && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">Vista previa de la imagen:</p>
          <img
            src={imageSrc()}
            alt="Vista previa"
            className="w-full h-auto mt-2 rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default UploadImages;
