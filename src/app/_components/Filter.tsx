import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FilterTypes } from '../types/filterTypes'

interface FilterProps {
    setFilter: (filter: FilterTypes) => void
}

export default function Filter({ setFilter }: FilterProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <MenuButton className="text-white inline-flex w-[15rem] md:w-[6rem] justify-center gap-x-1.5 ring-1 ring-slate-400/30 rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-500/50">
                Sort by
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="text-white absolute bg-[#0a0a0a] right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-md shadow-slate-500/40 ring-1 ring-slate-400/30 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
            <div>
            <MenuItem>
                <span
                onClick={() => setFilter(FilterTypes.CONFIDENCE)}
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-500/50 rounded-t-md data-[focus]:outline-none"
                >
                    Confidence
                </span>
            </MenuItem>
            <MenuItem>
                <span
                onClick={() => setFilter(FilterTypes.ALPHABETICAL)}
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-500/50 data-[focus]:outline-none"
                >
                    A - Z
                </span>
            </MenuItem>
            <MenuItem>
                <span
                onClick={() => setFilter(FilterTypes.REVERSE_ALPHABETICAL)}
                className="block px-4 py-2 text-sm data-[focus]:bg-gray-500/50 rounded-b-md data-[focus]:outline-none"
                >
                    Z - A
                </span>
            </MenuItem>
            </div>
        </MenuItems>
        </Menu>
    )
}