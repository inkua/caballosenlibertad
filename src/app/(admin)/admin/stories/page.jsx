import { getStoriesPerPage } from "@/DAO/stories.db"
import SearchBar from "../componets/SearchBar/SearchBar"
import StoryAddBtn from "./components/StoryAddBtn/StoryAddBtn"
import StoryTable from "./components/StoryTable/StoryTable"
import Pagination from "../componets/Pagination/Pagination"

export const metadata = {
    title: "Historias",
    description: "Panel de historias.",
    openGraph: {
        title: 'Historias',
    },
    twitter: {
        title: 'Historias',
    },
}

const Stories = async ({ searchParams }) => {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getStoriesPerPage(Number(page), 10)
    } else {
        data = await getStoriesPerPage(1, 10)
    }
    return (
        <>
            <header className="bg-[#4EB5EB] shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="w-full flex flex-row items-center">
                        <div
                            className="w-10 md:w-14 aspect-square bg-no-repeat bg-contain bg-center mr-4 inline-block"
                            style={{ backgroundImage: "url('/admin/story.png')" }}
                        ></div>
                        <h1 className="text-3xl font-bold tracking-tight text-primary inline-block"> Historias</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <StoryAddBtn />
                    <SearchBar />
                </div>

                <StoryTable data={data.list} />

                <Pagination data={data} />

            </main>
        </>
    )
}

export default Stories
