import { getSession } from "@/app/(auth)/auth/lib"
import { setStoryImg, uploadStoryImg, getStoryById } from "@/DAO/stories.db"


export async function POST(request) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const data = await request.formData()
        const image = data.get('file')
        const storyId = data.get('id')
        const story = await getStoryById(storyId)

        if (!image || !story) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        let response

        if (story.data.imgUrl) {
            response = await setStoryImg(buffer, story.data.imgUrl, storyId)
        } else {
            response = await uploadStoryImg(buffer, storyId)
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