import { addProduct, getProducts } from "@/DAO/products.db";

export async function POST(req) {
    try {
        const { token, data } = await req.json();
        // Use token to validate request

        const res = await addProduct(data);
        return Response.json({ status: 200, data: res });
    } catch (e) {
        console.log(e);
        return Response.json({ status: 403, data: e });
    }
}
export async function GET() {
    try {
        const res = await getProducts()
        return Response.json({ status: 200, data: res });
    } catch (e) {
        return Response.json({ msg: e });
    }
}