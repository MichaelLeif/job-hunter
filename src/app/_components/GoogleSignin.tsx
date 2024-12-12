import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function GoogleSignin() {
  return (
    <div className="hover:scale-110 transition-all">
      <div className="w-[15rem] h-[3rem] rounded-md">
        <button onClick={() => signIn('google')} className="flex justify-center items-center w-full h-full bg-slate-950 gap-2">
          <FcGoogle className="text-white text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
