import { addProduct, getProducts } from "@/DAO/products.db";

export async function POST(req) {
    try {
        const { token, data } = await req.json();
        // Use token to validate request

        const res = await addProduct(data);

        if(res){
            return Response.json({ status: 200, msg:"operación Exitosa", data: res });
        }else{
            return Response.json({ status: 500, msg:"No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg:"No se pudo realizar la operación", data: e });
    }
}

export async function GET() {
    try {
        const res = await getProducts()
        if(res){
            return Response.json({ status: 200, msg:"operación Exitosa", data: res });
        }else{
            return Response.json({ status: 500, msg:"No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        return Response.json({  status: 500, msg: e });
    }
}