import { ToastProvider } from "@/utils/ToastProvider"


function layout({ children }) {
    return (
        <body>
            <ToastProvider />
            {children}
        </body>
    )
}

export default layout
