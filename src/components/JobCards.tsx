import React from 'react'

export default async function JobCards({ job }) {
	return (
		<div className='ring-1 ring-slate-400/30 rounded-lg h-[10rem] cursor-pointer p-5'>
			{job.name}
		</div>
	)
}
