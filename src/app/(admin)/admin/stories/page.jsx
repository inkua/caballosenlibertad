import { getStoriesPerPage } from "@/DAO/stories.db"
import SearchBar from "../componets/SearchBar/SearchBar"
import StoryAddBtn from "./components/StoryAddBtn/StoryAddBtn"
import StoryTable from "./components/StoryTable/StoryTable"
import Pagination from "../componets/Pagination/Pagination"

const Stories = async ({searchParams}) => {
    const { page } = searchParams
    let data = {}
    if (page) {
        data = await getStoriesPerPage(Number(page))
    } else {
        data = await getStoriesPerPage()
    }
    return (
        <>
    <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Historias</h1>
                </div>
            </header>

            <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
                <div className="sm:flex sm:items-center sm:justify-between">
                    <StoryAddBtn />
                    <SearchBar />
                </div>

                <StoryTable data={data.list} />

                <Pagination data={data}/>

            </main>
        </>
    )
}

export default Stories
