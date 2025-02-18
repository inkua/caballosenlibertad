
const BlockingOverlay = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="flex flex-col items-center">
                        <svg className="animate-spin h-10 w-10 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <p className="mt-3 text-white">Procesando, por favor espere...</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlockingOverlay