import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";

export const metadata = {
    title: "Contacto",
    description: "Dejanos tu consulta mediante el formulario o llamanos por telefono."
}


export default function page() {
    return (
        <main className='py-[70px] lg:py-[90px]'>
            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop pt-6 md:pt-12 lg:pt-14">
                <div className='flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16'>
                    <ContactMap phone={"+54 9 221 638-3686"} ubication={"Zona Sur, La Plata, Buenos Aires"} />
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}