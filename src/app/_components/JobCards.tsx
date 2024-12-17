import React from 'react'
import Confidence from './Confidence'
import JobType from '../_types/jobType'

const stageRender = (stage: string) => {
  switch (stage) {
    case 'New':
      return <span className="text-gray-500">New</span>
    case 'Interview':
      return <span className="text-yellow-500">Interview</span>
    case 'Offer':
      return <span className="text-green-500">Offer</span>
    case 'Rejected':
      return <span className="text-red-500">Done</span>
    default:
      return <span className="text-gray-500">Unknown</span>
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
        <span>
          {job.stage}
        </span>
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
