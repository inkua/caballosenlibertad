import ActionDropdown from "../ActionDropdown/ActionDropdown"
import Image from "next/image"

function ItemTable({ data }) {
    return (
        <tr className="overflow-y-scroll">
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center overflow-hidden justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                            <Image src={data?.url} alt='Foto del perrito protagonista' width={700} height={700} className='w-auto h-full' />
                        </div>

                        <div>
                            <h2 className="font-normal text-gray-800 dark:text-white ">{data.name}</h2>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">{data.mail}</td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{data.creation ? new Date(data.creation.seconds * 1000).toLocaleDateString('en-GB') : 'No Date Available'}</td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{data.lastMod ? new Date(data.lastMod.seconds * 1000).toLocaleDateString('en-GB') : 'No Date Available'}</td>
            <td className="px-4 py-4 text-sm whitespace-nowrap relative inline-block text-left">
                <ActionDropdown data={data} />
            </td>
        </tr>
    )
}

export default ItemTable
