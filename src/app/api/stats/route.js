import { getSession } from "@/app/(auth)/auth/lib";
import { getStats, updateStats } from "@/DAO/generic.db";

export async function GET() {
    try {
        const res = await getStats();

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

export async function PUT(req) {
    const session = await getSession()
    
    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }
    
    try {
        const { data, id } = await req.json();
        const currentStats = await getStats()
        
        // Update the specific statistic
        const updatedStatistics = currentStats.statistics.map(stat => 
            stat.name === data.name ? { ...stat, amount: data.amount } : stat
        );
        
        // Create the updated data object
        const newData = { ...currentStats, statistics: updatedStatistics };

        const res = await updateStats(newData, id)
        
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