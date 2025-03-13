import { ToastProvider } from "@/utils/ToastProvider"
import AdminNav from "./componets/AdminNav/AdminNav"

export const metadata = {
    title: {
        template: '%s | Admin',
        default: "Caballos en Libertad",
    },
    description: {
        template: "%s",
        default: "Caballos en Libertad",
    },
    openGraph: {
        title: {
            template: '%s | Admin',
            default: 'Caballos en Libertad',
        },
        description: {
            template: "%s",
        },
        images: [
            {
                url: "/assets/nosotros/hero.jpg",
                width: 1200,
                height: 630,
                alt: "Logo descripción de la asociación",
            },
        ],
        type: "website",
        siteName: "@caballosenlibertad",
    },
    twitter: {
        card: "summary_large_image",
        title: {
            template: '%s | Admin',
            default: 'Caballos en Libertad',
        },
        description: {
            template: "%s",
        },
        images: "/assets/nosotros/hero.jpg",
        site: "@caballosenlibertad",
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
