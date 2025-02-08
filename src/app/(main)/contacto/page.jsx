import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";

export default function page() {
    return (
        <main className='mx-mobile my-28 sm:m-tablet  lg:m-desktop'>
            <section className="m-auto max-w-content">
                <div className='flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16'>
                    <ContactMap phone={"+54 9 221 638-3686"} ubication={"Zona Sur, La Plata, Buenos Aires"} />
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}