'use client'

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { signIn } from 'next-auth/react';

export default function GitHubSignin() {
  return (
    <div className="hover:scale-110 transition-all">
      <div className="w-[15rem] h-[3rem] rounded-md"> 
        <button onClick={() => signIn('github', { callbackUrl: '/' })}type="submit" className="flex justify-center items-center w-full h-full bg-slate-950 gap-2">
          <FaGithub className="text-white text-2xl" />
          Sign in with Github
        </button>
      </div>
    </div>
  )
}
