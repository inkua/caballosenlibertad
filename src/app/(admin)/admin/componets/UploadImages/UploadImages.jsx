"use client";

const UploadImages = (props) => {
  const { image, setImage } = props;
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
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-1 block w-full text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>

      {/* Vista previa de la imagen si está disponible */}
      {image && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">Vista previa de la imagen:</p>
          <img
            src={URL.createObjectURL(image)}
            alt="Vista previa"
            className="w-full h-auto mt-2 rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default UploadImages;
