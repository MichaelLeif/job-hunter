'use client'

import React from 'react'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const session = useSession();
  const router = useRouter();

  return (
    <>
      <div className='h-[4rem] w-screen text-white flex justify-between items-center px-10 border-b-[1px] border-slate-400/30'>
          <span onClick={() => router.push('/')} className="text-lg cursor-pointer">
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
                <button onClick={() => router.push('/account')} className='hover:bg-gray-500/50 w-auto rounded-md p-2 hover:shadow-md hover:shadow-slate-500/20 ring-1 ring-slate-400/30'>
                    Log In
                </button>
                <button onClick={() => router.push('/account')} className='hover:bg-gray-500/50 w-auto rounded-md p-2 hover:shadow-md hover:shadow-slate-500/20 ring-1 ring-slate-400/30'>
                    Sign Up
                </button>
              </div>
            )
          }
      </div>
    </>
  )
}
