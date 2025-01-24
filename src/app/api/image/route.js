import { uploadImage, updateImage, deleteImage } from "@/DAO/cloudinaryContainer";

export async function POST(request) {
    try {
        const data = await request.formData()
        const image = data.get('file')

        if (!image) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }

        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const response = await uploadImage(buffer)

        if (!response) {
            return Response.json("No se pudo guardar la imagen", { status: 500, data: null });
        }

        return Response.json({ message: "Imagen guardada", status: 200, data: response });

    } catch (error) {
        return Response.json("No se pudo guardar la imagen", { status: 500, data: null });
    }

}

export async function PUT(request) {
    try {
        const data = await request.formData()
        const image = data.get('file')
        const imageUrl = data.get('url')

        if (!image || !imageUrl) {
            return Response.json("No se pudo actualizar la imagen", { status: 400, data: null });
        }

        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const response = await updateImage(buffer, imageUrl)

        if (!response) {
            return Response.json("No se pudo actualizar la imagen", { status: 500, data: null });
        }

        return Response.json({ message: "Imagen actualizada", status: 200, data: response });

    } catch (error) {
        return Response.json("No se pudo actualizar la imagen", { status: 500, data: null });
    }
}

export async function DELETE(request) {
    try {
        const { url } = await request.json();
        if (!url ) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }

        const response = await deleteImage(url)

        if (!response) {
            return Response.json("No se pudo eliminar la imagen", { status: 500, data: null });
        }

        return Response.json({ message: "Imagen Eliminada", status: 200, data: response });

    } catch (error) {
        return Response.json("No se pudo eliminar la imagen", { status: 500, data: null });
    }
}