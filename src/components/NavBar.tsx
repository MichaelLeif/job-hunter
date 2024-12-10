import React from 'react'

export default function NavBar() {
  return (
    <div className='h-[4rem] w-screen text-white flex justify-between items-center px-10 border-b-[1px] border-slate-400/30'>
        <span className="text-lg cursor-default">
            Job Hunter
        </span>
        <div className="flex gap-5 w-auto">
            <button className='hover:bg-gray-500/50 w-auto rounded-md p-2 hover:shadow-md hover:shadow-slate-500/20 ring-1 ring-slate-400/30'>
                Log In
            </button>
            <button className='hover:bg-gray-500/50 w-auto rounded-md p-2 hover:shadow-md hover:shadow-slate-500/20 ring-1 ring-slate-400/30'>
                Sign Up
            </button>
        </div>
    </div>
  )
}
