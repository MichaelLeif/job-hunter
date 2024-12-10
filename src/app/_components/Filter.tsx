import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Filter() {
    return (
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <MenuButton className="text-white inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-500/50">
                Filter by
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="text-white absolute bg-[#0a0a0a] right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-md shadow-slate-500/40 ring-1 ring-slate-400/30 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-500/50 rounded-t-md data-[focus]:outline-none"
                >
                    Job title
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-500/50 data-[focus]:outline-none"
                >
                    Support
                </a>
            </MenuItem>
            <MenuItem>
                <a
                href="#"
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-500/50 data-[focus]:outline-none"
                >
                    License
                </a>
            </MenuItem>
            <form action="#" method="POST">
                <MenuItem>
                <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm data-[focus]:bg-gray-500/50 rounded-b-md data-[focus]:outline-none"
                >
                    Sign out
                </button>
                </MenuItem>
            </form>
            </div>
        </MenuItems>
        </Menu>
    )
}