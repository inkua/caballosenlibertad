import Image from "next/image";
import Link from "next/link";

function Card({ data, alt, url = '' }) {
    return (
        <div className="relative w-full h-auto mb-4 cursor-pointer">
            <Link href={url} target="_blank" rel="noopener noreferrer">
                <Image
                    src={data}
                    alt={alt}
                    width={700}
                    height={700}
                    className="w-full h-auto"
                    loading="eager"
                />

                <div className="absolute flex w-full h-full justify-center items-center bg-black/50 top-0 opacity-0 hover:opacity-100 duration-150">
                    <h2 className="text-h3 text-white font-bold">CABALLITO</h2>
                </div>
            </Link>
        </div>
    )
}

export default Card;