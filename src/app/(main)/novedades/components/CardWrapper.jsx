'use client'
import Card from "./Card";

function CardWrapper({ items }) {
    return (
        <>
            {items && items.map((item) => (
                <Card key={item.id} title={item.title} data={item.imgUrl} info={item.info} date={item.date} location={item.location} url={item.url} />
            ))}
        </>
    )
}

export default CardWrapper;