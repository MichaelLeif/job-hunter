import React from 'react'
import JobCards from './JobCards';
import JobType from '../_types/jobType';


export default function Jobs({ jobs }: {jobs: JobType[]}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
      {
        jobs.map((job, index) => (
          <JobCards key={index} job={job} />
        ))
      }
    </div>
  )
}
