import Image from "next/image";
import Link from "next/link";
import Card from "../../../novedades/components/Card"

export function Type0({ item }) {
    return (
        <article>
            <Link href="/historias" alt="página de historias" >
                <Image
                    src={item.imgUrl}
                    alt={item.alt ? item.alt : 'Evento'}
                    width={700}
                    height={700}
                    className="absolute w-full h-full object-cover"
                    loading="eager"
                />
            </Link>
        </article>
    );
}

export function Type1({ item }) {
    return (
        <article role="article">
            <Image
                src={item.imgUrl}
                alt={item.alt ? item.alt : 'Evento'}
                width={700}
                height={700}
                className="absolute w-full h-full object-cover"
                loading="eager"
            />
        </article>
    );
}

export function Type2({ item }) {
    return (
        <Card title={item.title} data={item.imgUrl} date={item.date} info={item.info} location={item.location} url={item.url} />
    );
}
