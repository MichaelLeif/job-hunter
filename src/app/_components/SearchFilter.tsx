import { Field, Input } from '@headlessui/react'
import { FaSearch } from "react-icons/fa";

interface SearchFilterProps {
  setQuery: (query: string) => void
}

export default function SearchFilter({ setQuery }: SearchFilterProps) {
  return (
    <div className="w-full max-w-md mr-1">
      <Field className="flex justify-center items-center w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white">
        <FaSearch  />
        <Input
          type="text"
          placeholder="e.g. Canva, Software Engineer..."
          onChange={(e) => setQuery(e.target.value)}
          className='w-full bg-transparent px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:none'
        />
      </Field>
    </div>
  )
}