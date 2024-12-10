import React from 'react'
import NavBar from './NavBar'
import SubBar from './SubBar'
import JobCards from './JobCards'
import { db } from '../_db';

export default async function Dashboard() {
  const jobs = await db.query.jobs.findMany();

  return (
    <div className="flex flex-col w-screen">
      <NavBar />
      <div className="flex items-end justify-end px-10">
          <SubBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {
              jobs.map((job, index) => (
                  <JobCards key={index} job={job} />
              ))
          }
      </div>
    </div>
  )
}
