import AdminActionDropdown from "../AdminActionDropdown/AdminActionDropdown";
import AdminImage from "./components/AdminImage";

function AdminItemTable({ data }) {
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center overflow-hidden justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full">
                            <AdminImage data={data.type}/>
        
                        </div>

                        <div>
                            <h2 className="font-normal text-gray-800  ">
                                {data.name}
                            </h2>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
                {data.email}
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
                {data.type}
            </td>
            <td className="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
                {data.password}
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap flex items-center justify-center">
                <AdminActionDropdown data={data} />
            </td>
        </tr>
    );
}

export default AdminItemTable;
