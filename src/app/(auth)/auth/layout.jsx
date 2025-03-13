import { ToastProvider } from "@/utils/ToastProvider"

export const metadata = {
    title: "Auth",
}

function layout({ children }) {
    return (
        <body>
            <ToastProvider />
            {children}
        </body>
    )
}

export default layout
