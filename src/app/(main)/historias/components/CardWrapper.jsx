'use client'
import Card from "./Card";

function CardWrapper({items}) {
    return (
        <div role="region" className="masonry columns-2 gap-2 md:gap-4">
            {items && items.map((item) => (
                <Card key={item.id} name={item.name} data={item.imgUrl} alt={item.alt} info={item.text} />
            ))}
        </div>
    );
}

export default CardWrapper;
