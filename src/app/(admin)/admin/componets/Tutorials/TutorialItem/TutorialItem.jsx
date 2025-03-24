import { useState } from "react"


function TutorialItem({ title, videoUrl }) {
    const [open, setopen] = useState(false)
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="p-8 bg-gray-100 rounded-lg ">
            <button className="flex items-center justify-between w-full" onClick={() => setopen(!open)}>
                <h1 className="font-semibold text-gray-700">{title}</h1>

                <span className="text-gray-400 bg-gray-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                    </svg>
                </span>
            </button>
            {
                open &&
                <p className="mt-6 text-sm text-gray-500 ">
                    {!showVideo ? (
                        <div
                            className="w-full h-full cursor-pointer relative"
                            onClick={() => setShowVideo(true)}
                        >
                            {/* Miniatura del video */}
                            <img
                                src="/notFoundImage.webp"
                                alt="Caballos en libertad, miniatura de video"
                                className="w-full h-full aspect-video object-cover rounded-lg"
                            />

                            {/* Botón de Play */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="w-16 h-16"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoUrl}
                            frameBorder="0"
                            allowFullScreen
                            title="Caballos en libertad, miniatura de video"
                            className="w-full h-full rounded-lg aspect-video"
                        />
                    )}
                </p>
            }

        </div>
    )
}

export default TutorialItem
