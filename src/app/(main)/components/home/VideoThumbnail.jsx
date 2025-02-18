"use client"

import { useState } from "react";

const VideoThumbnail = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="relative w-full h-[400px] max-h-[670px] aspect-[360/168] md:aspect-[1440/670] lg:aspect-none lg:h-[800px]">
            {!showVideo ? (
                <div
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setShowVideo(true)}
                >
                    {/* Miniatura del video */}
                    <img
                        src="/thumbnailVideo.webp"
                        alt="Caballos en libertad, miniatura de video"
                        className="w-full h-full object-cover rounded-lg"
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
                    src={`https://www.youtube.com/embed/nzJ-2DWM84M?autoplay=1`}
                    frameBorder="0"
                    allowFullScreen
                    title="Caballos en libertad, miniatura de video"
                    className="w-full h-full rounded-lg"
                />
            )}
        </div>
    );
};
export default VideoThumbnail