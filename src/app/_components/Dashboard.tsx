import React from 'react'
import NavBar from './NavBar'
import SubBar from './SubBar'
import Jobs from './Jobs'

export default async function Dashboard() {
  return (
    <div className="flex flex-col w-screen  overflow-y-auto pb-10">
      <NavBar />
      <div className="flex items-end justify-end px-10">
          <SubBar />
      </div>
      <Jobs />
    </div>
  )
}
