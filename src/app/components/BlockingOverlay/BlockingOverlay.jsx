
const BlockingOverlay = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-200 bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="flex flex-col items-center">
                        <img className="animate-spin h-10 w-10" src="/spin.svg" alt="loading" />
                        <p className="mt-3 text-darkBlue">Procesando, por favor espere...</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlockingOverlay