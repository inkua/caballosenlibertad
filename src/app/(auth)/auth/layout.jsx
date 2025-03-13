import { ToastProvider } from "@/utils/ToastProvider"

export const metadata = {
    title: "Iniciar sesión",
    description: "Iniciar sesión en tu cuenta.",
    openGraph: {
        title: 'Iniciar sesión',
    },
    twitter: {
        title: 'Iniciar sesión',
    },
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
