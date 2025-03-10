import { formatDateForUser } from "@/utils/getDate";
import Image from "next/image";
import Link from "next/link";

function Card({ title, data, date, info, location, url }) {
    return (
        <article className="flex flex-col lg:flex-row bg-white rounded-2xl p-8 lg:p-16 gap-6 md:gap-14 relative z-99">
            <div className="aspect-[8/10] overflow-hidden rounded-2xl w-full lg:w-[40%]">
                <Image
                    src={data || "/notFoundImage.webp"}
                    alt={"No disponible"}
                    width={700}
                    height={700}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>
            <div role="region" className="flex flex-col gap-4 md:gap-8 justify-between w-full lg:w-[60%]">
                <h2 className="text-primary text-h2 font-bold leading-120">{title}</h2>
                <p className="text-p2">
                    {info}
                </p>
                <div>
                    <h3 className="text-h3">¿Cuando?</h3>
                    <p className="text-p3">{formatDateForUser(date)}</p>

                </div>
                <div>
                    <h3 className="text-h3">¿Dónde?</h3>
                    <p className="text-p3">{location}</p>
                </div>

                {
                    url &&
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                        <button className="button-primary lg:!w-[50%]">VER PUBLICACIÓN</button>
                    </Link>
                }
            </div>

        </article>
    )
}

export default Card;