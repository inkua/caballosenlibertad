import { truncateString } from "@/utils/textLimit";
import ItemTableImg from "../../../componets/ItemTableImg/ItemTableImg";
import ActionDropdown from "../ActionDropdown/ActionDropdown";
import { formatDateForUser } from "@/utils/getDate";

function ItemTable({ data }) {
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
                            <ItemTableImg data={data?.imgUrl} />
                        </div>

                        <div>
                            <h2 className="font-normal text-gray-800">
                                {truncateString(data?.title)}
                            </h2>
                            <p className="text-xs font-normal text-gray-500">
                                {data?.id}
                            </p>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
                {formatDateForUser(data.date)}
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
                {truncateString(data.info, 100)}
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
                {truncateString(data.location, 50)}
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
                {data.url?"si":"No"}
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap flex items-center justify-center">
                <ActionDropdown data={data} />
            </td>
        </tr>
    )
}

export default ItemTable;
