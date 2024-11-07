import ActionDropdown from "../ActionDropdown/ActionDropdown";
import Image from "next/image";

function ItemTable({ data }) {
  return (
    <tr classNameName="overflow-y-scroll">
      <td classNameName="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div classNameName="inline-flex items-center gap-x-3">
          <div classNameName="flex items-center gap-x-2">
            <div classNameName="flex items-center overflow-hidden justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
              <Image
                src={data?.url}
                alt="Foto del perrito protagonista"
                width={700}
                height={700}
                classNameName="w-auto h-full"
              />
            </div>

            <div>
              <h2 classNameName="font-normal text-gray-800 dark:text-white ">
                {data.title}
              </h2>
            </div>
          </div>
        </div>
      </td>
      <td classNameName="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data.date
          ? new Date(data.date.seconds * 1000).toLocaleDateString("en-GB")
          : "No Date Available"}
      </td>
      <td classNameName="px-12 max-w-[20%] overflow-hidden py-4 text-sm font-normal text-gray-700">
        {data.info}
      </td>
      <td classNameName="px-4 py-4 text-sm whitespace-nowrap relative inline-block text-left">
        <ActionDropdown data={data} />
      </td>
    </tr>
  );
}

export default ItemTable;
