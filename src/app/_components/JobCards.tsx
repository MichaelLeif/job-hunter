import React from 'react'

export default async function JobCards({ job }) {
	return (
		<div className='ring-1 ring-slate-400/30 rounded-lg h-[10rem] cursor-pointer p-5'>
			<h1 className="font-bold text-lg">
				{job.company}
			</h1>
      <h2 className="text-md">
        {job.role}
      </h2>
		</div>
	)
}
