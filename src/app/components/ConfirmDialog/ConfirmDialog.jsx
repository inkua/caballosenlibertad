

const ConfirmDialog = ({ isModalOpen, onConfirm, onCancel, message }) => {
    return (
        <>
            {isModalOpen && (
                <div className="relative flex justify-center">

                    <div
                        className="fixed inset-0 z-10 overflow-y-auto" role="dialog"
                    >
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 ">
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-100 rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                {message ?

                                    <div>
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 42 42" className="w-8 h-8 text-gray-700">
                                                <path fill="currentColor" d="M17.737 30.521c0 .815.259 1.481.775 2.01c.528.517 1.185.785 1.971.785c.797 0 1.462-.27 1.99-.785c.536-.527.807-1.193.807-2.01c0-.808-.271-1.482-.807-2c-.527-.527-1.193-.787-1.99-.787c-.786 0-1.442.26-1.971.787c-.516.518-.775 1.194-.775 2zm.945-5.542h3.751c-.101-.766-.05-1.145.18-1.761a7.932 7.932 0 0 1 .936-1.75c.378-.549.814-1.075 1.305-1.583a18.86 18.86 0 0 0 1.353-1.571a9.394 9.394 0 0 0 1.056-1.731c.287-.618.428-1.294.428-2.06c0-.985-.17-1.84-.498-2.577a4.986 4.986 0 0 0-1.433-1.86c-.618-.508-1.354-.885-2.188-1.134a9.709 9.709 0 0 0-2.756-.379c-1.363 0-2.586.299-3.671.886a9.555 9.555 0 0 0-2.826 2.239l2.378 2.108a6.927 6.927 0 0 1 1.74-1.362a4.395 4.395 0 0 1 2.08-.498c.946 0 1.683.259 2.219.785c.527.528.797 1.215.797 2.08c0 .548-.141 1.055-.408 1.532c-.279.479-.618.965-1.025 1.453c-.408.486-.846.995-1.303 1.502a11.12 11.12 0 0 0-1.225 1.661a7.57 7.57 0 0 0-.815 1.971c-.194.716-.203 1.195-.075 2.049zM1.5 21c0 10.766 8.735 19.5 19.5 19.5c10.766 0 19.5-8.734 19.5-19.5S31.766 1.5 21 1.5C10.235 1.5 1.5 10.234 1.5 21zm3.592 0c0-8.785 7.123-15.909 15.908-15.909S36.909 12.215 36.909 21S29.785 36.909 21 36.909S5.092 29.785 5.092 21z" />
                                            </svg>
                                        </div>

                                        <div className="mt-2 text-center sm:max-w-sm sm:w-full ">
                                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize" id="modal-title">Está seguro?</h3>
                                            <p className="mt-2 text-sm text-gray-500">{message}</p>
                                        </div>
                                    </div>

                                    :

                                    <div>
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700" width="200" height="200" viewBox="0 0 26 26">
                                                <path fill="currentColor" d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2zm4 0v12h2V10h-2z" />
                                            </svg>
                                        </div>

                                        <div className="mt-2 text-center sm:max-w-sm sm:w-full ">
                                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize" id="modal-title">Eliminar registro</h3>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Estás seguro de eliminar este registro?
                                                <br /> Cambio irreversible.
                                            </p>
                                        </div>
                                    </div>
                                }

                                <div className="mt-5 sm:flex sm:items-center sm:justify-end">
                                    <div className="sm:flex sm:items-center">
                                        {message?
                                        <button
                                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-400 md:mr-3"
                                            onClick={onConfirm}
                                        >
                                            Confirmar
                                        </button>
                                        :
                                        <button
                                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500 md:mr-3"
                                            onClick={onConfirm}
                                        >
                                            Eliminar
                                        </button>
                                        }

                                        <button
                                            className="w-full px-4 py-2 mt-2 text-sm font-medium  bg-white text-gray-800 capitalize border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                            onClick={onCancel}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>


    )
}

export default ConfirmDialog
