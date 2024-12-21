'use client'

import React, { useState } from 'react'
import SubBar from './SubBar'
import Jobs from './Jobs'
import { FilterTypes } from '../types/filterTypes'
import JobType from '../types/jobType'

export default function Content({ jobs }: {jobs: JobType[]}) {
  const [filter, setFilter] = useState(FilterTypes.ALPHABETICAL);
  const [query, setQuery] = useState('');

  const filteredJobs = jobs
    .filter((job) => {
      const result = query.toLowerCase();

      // Check if any property matches the query
      return (
        job.company.toLowerCase().includes(result) ||
        job.role.toLowerCase().includes(result) ||
        job.stage?.toLowerCase().includes(result)
      );
    })
    .sort((a, b) => {
      const result = query.toLowerCase();

      // Score matches: Prioritize those where the property starts with the query
      const getScore = (job: JobType) => {
        if (job.company.toLowerCase().startsWith(result)) return 1;
        if (job.role.toLowerCase().startsWith(result)) return 2;
        if (job.stage?.toLowerCase().startsWith(result)) return 3;
        return 4; // Default for no match
      };

      return getScore(a) - getScore(b);
    });
    
  jobs = filteredJobs;

  jobs.sort((a: JobType, b: JobType) => {
    if (filter === FilterTypes.CONFIDENCE) {
      if (b.confidence === a.confidence) {
        return a.company.localeCompare(b.company);
      }
      return b.confidence - a.confidence;
    } else if (filter === FilterTypes.ALPHABETICAL) {
      return a.company.localeCompare(b.company);
    } else if (filter === FilterTypes.REVERSE_ALPHABETICAL) {
      return b.company.localeCompare(a.company);
    }
    return 0;
  });

  return (
    <>
      <div className="flex items-end justify-end px-10">
        <SubBar setFilter={setFilter} setQuery={setQuery} />
      </div>
      {
        jobs.length ?
        <Jobs jobs={jobs} />
        :
        <div className='h-[50vh] max-h-screen w-screen flex justify-center items-center'>
          <span className='text-center text-lg flex-1'>
            Apply to some jobs and add them to your profile to keep track of them!
          </span>
        </div>
      }
    </>
  )
}
