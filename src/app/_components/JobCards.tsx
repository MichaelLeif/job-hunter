import React from 'react'
import Confidence from './Confidence'
import JobType from '../_types/jobType'

const handleJobStageColor = (stage: string) => {
  switch (stage) {
    case 'Applied':
      return 'bg-red-400';
    case 'Online Assessment':
      return 'bg-orange-400';
    case 'Interview':
      return 'bg-yellow-400';
    case 'System Design Interview':
      return 'bg-[#90EE90]';
    case 'Technical Interview':
      return 'bg-green-400';
    case 'Culture Fit':
      return 'bg-blue-400';
    case 'Waiting for offer':
      return 'bg-purple-400';
    case 'Rejected':
      return 'bg-red-400';
    case 'Offer':
      return 'bg-green-400';
  }
}

export default function JobCards({ job }: { job: JobType}) {
	return (
		<div className='ring-1 ring-slate-400/30 rounded-lg h-[10rem] cursor-pointer p-5 flex flex-col gap-4'>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">
            {job.company}
          </h1>
          <h2 className="text-md">
            {job.role}
          </h2>
        </div>
        <div className={`${handleJobStageColor(job.stage)} max-h-6 rounded-md`}>
          <span className="mx-2">
            {job.stage}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xs">
          Confidence
        </h3>
        <Confidence confidence={job.confidence} />
      </div>
		</div>
	)
}
