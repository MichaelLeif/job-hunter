import React from 'react'
import Confidence from './Confidence'

export default async function JobCards({ job }) {
	return (
		<div className='ring-1 ring-slate-400/30 rounded-lg h-[10rem] cursor-pointer p-5 flex flex-col gap-4'>
      <div>
        <h1 className="font-bold text-lg">
          {job.company}
        </h1>
        <h2 className="text-md">
          {job.role}
        </h2>
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
