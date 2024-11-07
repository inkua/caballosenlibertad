"use client";

import { usePathname } from "next/navigation";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "/admin", current: true },
  { name: "Usuarios", href: "/admin/users", current: false },
  { name: "Caballos", href: "/admin/products", current: false },
  { name: "Eventos", href: "/admin/events", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "/admin/profile" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNameNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}
const isCurrentPath = (current, href) => {
  if (current == href) return true;
  return false;
};

function AdminNav() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" classNameName="bg-gray-800">
      <div classNameName="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div classNameName="flex h-16 items-center justify-between">
          <div classNameName="flex items-center">
            <div classNameName="flex-shrink-0">
              <img
                alt="Your Company"
                src="/admin/inkuALogo.png"
                classNameName="h-8 w-auto"
              />
            </div>
            <div classNameName="hidden md:block">
              <div classNameName="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={
                      isCurrentPath(pathname, item.href) ? "page" : undefined
                    }
                    classNameName={classNameNames(
                      isCurrentPath(pathname, item.href)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div classNameName="hidden md:block">
            <div classNameName="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
              <Menu as="div" classNameName="relative ml-3">
                <div>
                  <MenuButton classNameName="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span classNameName="absolute -inset-1.5" />
                    <span classNameName="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user.imageUrl}
                      classNameName="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  classNameName="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        classNameName="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
          <div classNameName="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <DisclosureButton classNameName="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span classNameName="absolute -inset-0.5" />
              <span classNameName="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                classNameName="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                classNameName="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel classNameName="md:hidden">
        <div classNameName="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={
                isCurrentPath(pathname, item.href) ? "page" : undefined
              }
              classNameName={classNameNames(
                isCurrentPath(pathname, item.href)
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div classNameName="border-t border-gray-700 pb-3 pt-4">
          <div classNameName="flex items-center px-5">
            <div classNameName="flex-shrink-0">
              <img
                alt=""
                src={user.imageUrl}
                classNameName="h-10 w-10 rounded-full"
              />
            </div>
            <div classNameName="ml-3">
              <div classNameName="text-base font-medium leading-none text-white">
                {user.name}
              </div>
              <div classNameName="text-sm font-medium leading-none text-gray-400">
                {user.email}
              </div>
            </div>
          </div>
          <div classNameName="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                classNameName="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default AdminNav;
