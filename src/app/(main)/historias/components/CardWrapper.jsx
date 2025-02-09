'use client'
import { useEffect, useState } from "react";
import Card from "./Card";

function CardWrapper() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await fetch("/api/stories", { method: "GET" })
                if (response.ok) {
                    const data = await response.json()
                    setItems(data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getItems()
    }, [])

    return (
        <div className="masonry columns-2 gap-4">
            {items && items.map((item) => (
                <Card key={item.id} name={item.name} data={item.data} alt={item.alt} info={item.info} />
            ))}
        </div>
    );
}

export default CardWrapper;
