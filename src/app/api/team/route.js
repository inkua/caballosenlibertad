import { getSession } from "@/app/(auth)/auth/lib";
import { addTeam, getTeam, getTeamById, setTeamImg } from "@/DAO/generic.db";

export async function GET() {
    try {
        const res = await getTeam()

        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: e });
    }
}

export async function POST(request) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const data = await request.formData()
        const image = data.get('file')
        const teamId = data.get('id')
        const team = await getTeamById(teamId)

        if (!image || !team) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        let response

        if (team.data.imgUrl) {
            response = await setTeamImg(buffer, team.data.imgUrl, teamId)
        } else {
            response = await uploadStoryImg(buffer, teamId)
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