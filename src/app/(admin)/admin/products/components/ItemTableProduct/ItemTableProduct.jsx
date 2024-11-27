import ActionDropdownProduct from "../ActionDropdownProduct/ActionDropdownProduct";
import Image from "next/image";

function ItemTableProduct({ data }) {
  return (
    <tr className="overflow-y-scroll">
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
              <Image
                src={data?.url}
                alt="Foto del perrito protagonista"
                width={700}
                height={700}
                className="w-auto h-full"
              />
            </div>

            <div>
              <h2 className="font-normal text-gray-800 dark:text-white ">
                {data?.name}
              </h2>
              <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
                {data?.id}
              </p>
            </div>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
        {data?.category}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.description}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.price}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap relative inline-block text-left">
        <ActionDropdownProduct data={data} />
      </td>
    </tr>
  );
}

export default ItemTableProduct;
