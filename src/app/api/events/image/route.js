import { getSession } from "@/app/(auth)/auth/lib"
import { getEventById, setEventImg, uploadEventImg } from "@/DAO/events.db";

export async function POST(request) {
    const session = await getSession()
    
    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }
    
    try {
        const data = await request.formData()
        const image = data.get('file')
        const eventId = data.get('id')
        const event = await getEventById(eventId)
        
        if (!image || !event) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        let response
        
        if (event.data.imgUrl) {
            response = await setEventImg(buffer, event.data.imgUrl, eventId)
        } else {
            response = await uploadEventImg(buffer, eventId)
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