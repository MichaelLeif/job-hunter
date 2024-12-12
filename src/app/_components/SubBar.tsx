'use client'

import React from 'react'
import Filter from './Filter'
import AddJob from './AddJob'

export default function SubBar() {
  return (
    <div className="my-5 flex justify-between items-center w-screen">
        <AddJob />
        <Filter />
    </div>
  )
}
