import Image from 'next/image'

const ItemTableImg = ({ data }) => {
    const imageUrl = data || "https://res.cloudinary.com/diiavhlq4/image/upload/v1736874938/general-1736874938068.webp"
    return (
        <Image
            src={imageUrl}
            alt="imagen de ítem"
            width={100}
            height={100}
            className="w-auto h-full"
        />
    )
}

export default ItemTableImg
