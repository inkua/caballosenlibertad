
function DisplayImage({imgSrc}) {
    return (
        <div className="mt-4">
            <p className="text-sm text-gray-700">Vista previa de la imagen:</p>
            <img
                src={imgSrc}
                alt="Vista previa"
                className="w-full h-auto mt-2 rounded-lg"
                style={{
                    maxWidth: "50%",
                    maxHeight: "300px",
                }}
            />
        </div>
    )
}

export default DisplayImage
