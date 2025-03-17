import PasswordForm from "./components/PasswordForm/PasswordForm"

export const metadata = {
    title: "Cambiar contraseña",
    description: "Panel de cambio de contraseña.",
}

function Settings() {
    return (
        <main className="bg-white">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <PasswordForm />
            </div>
        </main>
    )
}

export default Settings
