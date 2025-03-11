import { addStats } from "@/DAO/generic.db";

export async function POST() {
    try {
        const data = {
            statistics: [
                { name: 'Rescates', icon: '/svg/plus_solid.svg', amount: '+500' },
                {
                    name: 'Voluntarios',
                    amount: '20',
                    icon: '/svg/hand_heart_solid_icon.svg'
                },
                {
                    name: 'En tratamiento',
                    amount: '10',
                    icon: '/svg/ambulance_solid.svg'
                },
                { icon: '/svg/calendar_solid.svg', name: 'Años', amount: '12' }
            ]
        }
        const res = await addStats(data);

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