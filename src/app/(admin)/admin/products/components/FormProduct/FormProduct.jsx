"use client";

import { useEffect, useState } from "react";

function FormProduct({ isOpen, setIsOpen, saveData, data, add = true }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name,
      price,
      category,
      description,
      image, // Asegúrate de incluir la imagen si es necesario
    };

    if (add) {
      saveData(newData);
    } else {
      saveData({ newData, id: id });
    }

    // Limpiar los campos después de enviar
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImage(null); // Limpiar la imagen

    setIsOpen(false);
  };

  useEffect(() => {
    if (data) {
      setName(data.name);
      setPrice(data.price);
      setCategory(data.category);
      setDescription(data.description);
      setId(data.id);
    }
  }, [data]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto max-h-[90vh] flex flex-col">
            {/* Encabezado del modal */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                {add ? "Agregar Producto" : "Modificar Producto"}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Contenedor del formulario con scroll */}
            <div className="overflow-y-auto p-6 flex-grow">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="productName"
                      className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ingresa nombre del producto"
                      required
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="productPrice"
                      className="block text-sm font-medium text-gray-700">
                      Precio
                    </label>
                    <input
                      type="number"
                      id="productPrice"
                      name="productPrice"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      required
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="productCategory"
                      className="block text-sm font-medium text-gray-700">
                      Categoria
                    </label>
                    <input
                      type="text"
                      id="productCategory"
                      name="productCategory"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Ingresa categoria del producto"
                      required
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="productDescription"
                      className="block text-sm font-medium text-gray-700">
                      Descripción
                    </label>
                    <textarea
                      id="productDescription"
                      name="productDescription"
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Ingresa descripción"
                      className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                  </div>

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
                      <p className="text-sm text-gray-700">
                        Vista previa de la imagen:
                      </p>
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Vista previa"
                        className="w-full h-auto mt-2 rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end space-x-4 p-6 border-t">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {add ? "Guardar Producto" : "Editar Producto"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormProduct;
