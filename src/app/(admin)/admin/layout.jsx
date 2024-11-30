import { ToastProvider } from "@/utils/ToastProvider"
import AdminNav from "./componets/AdminNav/AdminNav"

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
