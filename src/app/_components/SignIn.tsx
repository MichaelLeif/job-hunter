import React from 'react'
import GoogleSignin from './GoogleSignin'
import GitHubSignin from './GitHubSignin'

export default function SignIn() {
  return (
    <div className="fixed bg-black z-[999] h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 h-[10rem] w-[20rem] md:h-[20rem] md:w-[30rem] rounded-lg ring-1 ring-slate-400/30">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-lg font-semibold">
              Sign in
          </span>
          <span>
            with
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <GoogleSignin />
          <GitHubSignin />
        </div>
      </div>
    </div>
  )
}
