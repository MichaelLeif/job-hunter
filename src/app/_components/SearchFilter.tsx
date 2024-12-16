import { Field, Input } from '@headlessui/react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

interface SearchFilterProps {
  setQuery: (query: string) => void
}

export default function SearchFilter({ setQuery }: SearchFilterProps) {
  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setQuery(inputValue);
      console.log('Enter key pressed');
    }
  }

  return (
    <div className="w-full max-w-md">
      <Field className="flex justify-center items-center w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white">
        <FaSearch  />
        <Input
          type="text"
          placeholder="e.g. Canva, Software Engineer..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className='w-full bg-transparent px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:none'
        />
      </Field>
    </div>
  )
}