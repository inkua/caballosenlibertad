import { ToastProvider } from "@/utils/ToastProvider"
import AdminNav from "./componets/AdminNav/AdminNav"

export const metadata = {
    title: "Admin",
}

function layout({ children }) {
    return (
        <body >
            <AdminNav/>
            <ToastProvider />
            {children}
        </body>
    )
}

export default layout
