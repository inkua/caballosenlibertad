import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";

export const metadata = {
    title: "Contacto",
    description: "¿Tienes dudas o quieres colaborar? Escríbenos a través de nuestro formulario de contacto y redes sociales. Estamos aquí para ayudarte.",
}

export default function page() {
    return (
        <main className='py-[70px] lg:py-[90px]'>
            <section className="m-auto max-w-content px-mobile md:px-tablet lg:px-desktop pt-6 md:pt-12 lg:pt-14">
                <div className='flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16'>
                    <ContactMap />
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}