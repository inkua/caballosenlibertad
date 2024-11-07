"use client";
import { useToast } from "@/utils/toast";

const { showToast } = useToast();

function imgClick() {
  showToast({ type: "warning", message: "Margot Foster" });
}

function ProductDetail() {
  return (
    <div classNameName="container mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:py-20">
      <div classNameName="px-4 sm:px-0">
        <h3 classNameName="text-base font-semibold leading-7 text-gray-900">
          Applicant Information
        </h3>
        <div className="flex items-center gap-x-6">
          <img
            onClick={() => imgClick()}
            classNameName="h-16 w-16 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div>
            <h3 classNameName="text-base font-semibold leading-7 tracking-tight text-gray-900">
              Leslie Alexander
            </h3>
            <p classNameName="text-sm font-semibold leading-6 text-indigo-600">
              Co-Founder / CEO
            </p>
          </div>
        </div>
        <p classNameName="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div classNameName="mt-6 border-t border-gray-100">
        <dl classNameName="divide-y divide-gray-100">
          <div classNameName="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt classNameName="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd classNameName="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Margot Foster
            </dd>
          </div>
          <div classNameName="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt classNameName="text-sm font-medium leading-6 text-gray-900">
              Role
            </dt>
            <dd classNameName="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Admin
            </dd>
          </div>
          <div classNameName="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt classNameName="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd classNameName="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              margotfoster@example.com
            </dd>
          </div>
          <div classNameName="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt classNameName="text-sm font-medium leading-6 text-gray-900">
              Salary expectation
            </dt>
            <dd classNameName="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              $120,000
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default ProductDetail;
