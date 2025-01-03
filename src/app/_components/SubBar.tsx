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
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2">
        <div className="order-2 md:order-1">
          <AddJob />
        </div>
        <div className="min-w-[15rem] md:w-[20rem] order-1 md:order-2">
          <SearchFilter setQuery={setQuery} />
        </div>
        <div className="order-3 md:order-3">
          <Filter setFilter={setFilter} />
        </div>
      </div>
    </div>
  )
}
