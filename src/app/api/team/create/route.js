import { addTeam } from "@/DAO/generic.db";

export async function POST() {
    try {
        const data = {
            imgUrl:"https://res.cloudinary.com/diiavhlq4/image/upload/v1740680537/generic-1740680536727.webp"
        }
        const res = await addTeam(data);

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