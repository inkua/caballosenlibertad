import Image from 'next/image'
import React from 'react'

function AdminImage({ data }) {
    let imageUrl = "/admin/admin/admin.svg"
    let color = "bg-blue-200"
    if(data==="root"){
        imageUrl = "/admin/admin/root.svg"
        color = "bg-green-200"
    }
    return (
        <Image
            src={imageUrl}
            alt={`${data} avatar`}
            width={100}
            height={100}
            className={`w-auto h-full ${color}`}
        />
    )
}

export default AdminImage
