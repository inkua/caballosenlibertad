import { ToastProvider } from "@/utils/ToastProvider"

import AdminNav from "./componets/AdminNav/AdminNav"

export const metadata = {
    title: {
        template: '%s | Admin',
        default: "Caballos en Libertad",
    },
};


function layout({ children }) {
    return (
        <body >
            <AdminNav />
            <ToastProvider />
            {children}
        </body>
    )
}

export default layout
