import { getSession } from "@/app/(auth)/auth/lib";
import { setAdoptionImg, uploadAdoptionImg, getAdoptionById } from "@/DAO/adoptions.db";

export async function POST(request) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const data = await request.formData()
        const image = data.get('file')
        const adoptionId = data.get('id')
        const adoption = await getAdoptionById(adoptionId)

        if (!image || !adoption) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        let response

        if (adoption.data.imgUrl) {
            response = await setAdoptionImg(buffer, adoption.data.imgUrl)
        } else {
            response = await uploadAdoptionImg(buffer, adoptionId)
        }

        if (response) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: response });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: response });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}