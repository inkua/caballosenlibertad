import { headers } from "next/headers";

const getUrlBase = ()=>{
    const host = headers().get("host");  
    const protocol = host?.includes("localhost") ? "http" : "https"; 
    return `${protocol}://${host}`
}
export {
    getUrlBase,
}