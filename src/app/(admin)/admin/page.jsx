import Link from "next/link"
import Tutorials from "./componets/Tutorials/Tutorials"

function Index() {
    return (
        < >
            <header className="bg-[#21DDAB] shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="w-full flex flex-row items-center">
                        <div 
                            className="w-10 md:w-14 aspect-square bg-no-repeat bg-contain bg-center mr-4 inline-block" 
                            style={{backgroundImage:"url('/admin/panel.png')"}}
                        ></div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary inline-block"> Panel</h1>
                        <div className='ml-auto'>
                            <Link 
                                className='underline text-black'
                                href='/'
                                alt="go home"
                            >Ir al sitio web</Link>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container mx-auto mt-1 max-w-7xl px-4 sm:px-6 lg:px-8">
                <Tutorials />
            </main>
        </>
    )
}

export default Index
