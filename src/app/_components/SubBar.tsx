import React from 'react'
import Filter from './Filter'
import AddJob from './AddJob'
import { FilterTypes } from '../types/filterTypes'
import SearchFilter from './SearchFilter'

interface SubBarProps {
  setFilter: (filter: FilterTypes) => void
  setQuery: (query: string) => void
}

export default function SubBar({ setFilter, setQuery }: SubBarProps) {
  return (
    <div className="my-5 flex flex-col md:flex-row justify-between items-center w-screen">
        <AddJob />
        <SearchFilter setQuery={setQuery} />
        <Filter setFilter={setFilter} />
    </div>
  )
}
