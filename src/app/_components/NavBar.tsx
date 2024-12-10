'use client'

import React from 'react'
import { GET } from "@/app/api/auth/[...nextauth]/route";
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function NavBar() {
  const session = useSession();

  return (
    <div className='h-[4rem] w-screen text-white flex justify-between items-center px-10 border-b-[1px] border-slate-400/30'>
        <span className="text-lg cursor-default">
            Job Hunter
        </span>
        {
          session.status === 'authenticated' && session.data.user.email ?
          (
            <button onClick={() => signOut()} className='hover:bg-gray-500/50 w-auto rounded-md p-2 hover:shadow-md hover:shadow-slate-500/20 ring-1 ring-slate-400/30'>
              Sign out
            </button>
          )
          :
          (
            <div className="flex gap-5 w-auto">
              <button onClick={() => signIn('google')} className='hover:bg-gray-500/50 w-auto rounded-md p-2 hover:shadow-md hover:shadow-slate-500/20 ring-1 ring-slate-400/30'>
                  Log In
              </button>
              <button onClick={() => signIn('google')} className='hover:bg-gray-500/50 w-auto rounded-md p-2 hover:shadow-md hover:shadow-slate-500/20 ring-1 ring-slate-400/30'>
                  Sign Up
              </button>
            </div>
          )
        }
    </div>
  )
}
