import { useEffect, useState } from "react";

const StoryForm = ({ isOpen, setIsOpen, saveStory, data, add = true }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        text: "",
        status: "Activo",
    });

    const [id, setId] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formValues };

        if (add) {
            saveStory(newData);
        } else {
            saveStory({ newData, id: id });
        }

        setFormValues({
            name: "",
            text: "",
            status: "Activo",
        })

        setIsOpen(false);
    };

    useEffect(() => {
        if (data) {
            setFormValues({
                name: data.name || "",
                text: data.text || "",
                status: data.status || "Activo",
            });
            setId(data.id);
        }
    }, [data]);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-[500px] lg:w-[900px] max-h-[95vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">
                            {add ? "Nueva historia" : "Actualizar historia"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-black" htmlFor="name">
                                        Nombre:
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="text-black" htmlFor="status">
                                        Estado:
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={formValues.status}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    >
                                        <option value="Activo">Activo</option>
                                        <option value="Desactivado">Desactivado</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-black" htmlFor="text">
                                    Historia:
                                </label>
                                <textarea
                                    id="text"
                                    name="text"
                                    rows="5"
                                    value={formValues.text}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                />
                            </div>

                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex items-center px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500">
                                    <span className="mx-1">{add ? "Guardar" : "Actualizar"}</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
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

export default StoryForm
