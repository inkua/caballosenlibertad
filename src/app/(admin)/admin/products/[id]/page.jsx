import { getProductById } from "@/DAO/products.db";

async function ProductDetail({ params }) {
  const response = await getProductById(params.id);
  const product = await response.data;

  return (
    <>
      <header classNameName="bg-white shadow">
        <div classNameName="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 classNameName="text-3xl font-bold tracking-tight text-gray-900">
            Detalle de producto
          </h1>
        </div>
      </header>

      <main classNameName="container mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:py-20">
        <div classNameName="space-y-12">
          {product ? (
            <div classNameName="border-b border-gray-900/10 pb-12">
              <h2 classNameName="text-base font-semibold leading-7 text-gray-900">
                Nombre
              </h2>
              <p classNameName="mt-1 text-sm leading-6 text-gray-600">
                {product.name}
              </p>

              <h2 classNameName="text-base font-semibold leading-7 text-gray-900">
                ID
              </h2>
              <p classNameName="mt-1 text-sm leading-6 text-gray-600">
                {product.id}
              </p>

              <h2 classNameName="text-base font-semibold leading-7 text-gray-900">
                Categoría
              </h2>
              <p classNameName="mt-1 text-sm leading-6 text-gray-600">
                {product.category}
              </p>

              <h2 classNameName="text-base font-semibold leading-7 text-gray-900">
                precio
              </h2>
              <p classNameName="mt-1 text-sm leading-6 text-gray-600">
                {product.price}
              </p>

              <h2 classNameName="text-base font-semibold leading-7 text-gray-900">
                Description
              </h2>
              <p classNameName="mt-1 text-sm leading-6 text-gray-600">
                {product.description}
              </p>
            </div>
          ) : (
            <p>Product Not Found</p>
          )}
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
