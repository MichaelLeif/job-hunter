'use client'

import React from 'react'
import GoogleSignin from './GoogleSignin'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-[10rem] m-auto">
      <div className="flex flex-col justify-center items-center gap-5 h-[10rem] w-[20rem] md:h-[20rem] md:w-[30rem] rounded-lg ring-1 ring-slate-400/30">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-lg font-semibold">
              Sign in
          </span>
          <span>
            with
          </span>
        </div>
        <div onClick={() => signIn('google')}>
          <GoogleSignin />
        </div>
      </div>
    </div>
  )
}
