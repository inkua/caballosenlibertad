import { formatDateForUser } from "@/utils/getDate";
import { paragrahFormat } from "@/utils/textLimit";
import Image from "next/image";
import Link from "next/link";

function Card({ title, data, date, info, location, url }) {
    
    return (
        <article className="flex flex-col lg:flex-row bg-white rounded-2xl p-8 lg:p-12 xl:p-16 gap-6 md:gap-10 lg:gap-14 relative z-99">
            <div className="aspect-[8/10] overflow-hidden rounded-2xl w-full lg:w-[50%] flex-shrink-0">
                <Image
                    src={data || "/notFoundImage.webp"}
                    alt={"No disponible"}
                    width={700}
                    height={700}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>
            <div role="region" className="flex flex-col gap-4 md:gap-8 justify-between w-full ">
                <h2 className="text-primary text-2xl xl:text-[40px] font-bold leading-120">{title}</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: paragrahFormat(info, "text-base xl:text-xl mb-4")}}
                    >
                </div>
                <div>
                    <h3 className="text-xl font-semibold ">¿Cuando?</h3>
                    <p className="text-lg">{formatDateForUser(date)}</p>

                </div>
                <div>
                    <h3 className="text-xl font-semibold">¿Dónde?</h3>
                    <p className="text-lg">{location}</p>
                </div>

                {
                    url &&
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                        <button className="button-primary lg:!w-[80%]">VER PUBLICACIÓN</button>
                    </Link>
                }
            </div>

        </article>
    )
}

export default Card;