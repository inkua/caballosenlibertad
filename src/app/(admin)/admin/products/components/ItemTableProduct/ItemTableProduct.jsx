import ActionDropdownProduct from "../ActionDropdownProduct/ActionDropdownProduct";
import Image from "next/image";

function ItemTableProduct({ data }) {
  return (
    <tr classNameName="overflow-y-scroll">
      <td classNameName="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div classNameName="inline-flex items-center gap-x-3">
          <div classNameName="flex items-center gap-x-2">
            <div classNameName="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800 overflow-hidden">
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
                {data?.name}
              </h2>
              <p classNameName="text-xs font-normal text-gray-500 dark:text-gray-400">
                {data?.id}
              </p>
            </div>
          </div>
        </div>
      </td>

      <td classNameName="px-4 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
        {data?.category}
      </td>
      <td classNameName="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.description}
      </td>
      <td classNameName="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {data?.price}
      </td>
      <td classNameName="px-4 py-4 text-sm whitespace-nowrap relative inline-block text-left">
        <ActionDropdownProduct data={data} />
      </td>
    </tr>
  );
}

export default ItemTableProduct;
