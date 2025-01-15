import Image from 'next/image'

function AdoptionItemTableImg({ data }) {
    const imageUrl = data || "https://res.cloudinary.com/diiavhlq4/image/upload/v1736874938/general-1736874938068.webp"
    return (
        <Image
            src={imageUrl}
            alt="Caballo en adopción"
            width={700}
            height={700}
            className="w-auto h-full"
        />
    )
}

export default AdoptionItemTableImg
