import React, { useState } from 'react'
import { Button } from '@headlessui/react'
import { FaPlus } from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import addJobAction from '../_server/addJobAction';
export const dynamic = "force-dynamic";

export default function AddJob() {
  const [jobModal, setJobModal] = useState(false)

  return (
    <>
      <Button onClick={() => setJobModal(true)} className="text-white inline-flex justify-center items-center gap-x-1.5 ring-1 ring-slate-400/30 rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-500/50">
        Add job
        <FaPlus className="text-white" />
      </Button>
      <Dialog open={jobModal} as="div" className="relative z-10 focus:outline-none" onClose={() => setJobModal(false)}>
        <div className="w-screen h-screen backdrop-blur-sm bg-slate-400/10 fixed inset-0 z-10 overflow-y-auto">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="bg-black w-full max-w-sm md:max-w-md lg:max-w-lg h-[28rem] space-y-4 rounded-xl ring-1 ring-slate-400/30 p-6"
              >
                <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                  Add your new job
                </DialogTitle>
                <form action={addJobAction} onSubmit={() => setJobModal(false)} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="company" className="text-sm text-white">
                      Company
                    </label>
                    <input name="company" type="text" placeholder="e.g. Canva" className="w-full rounded-md border-[1.75px] py-1 px-2 border-gray-600/25 text-sm text-black ring-1 ring-inset ring-gray-300/25 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                  </div>
                  <div>
                    <label htmlFor="job-role" className="text-sm text-white">
                      Job title
                    </label>
                    <input name="job-role" type="text" placeholder="e.g. Software Engineer" className="w-full rounded-md border-[1.75px] py-1 px-2 border-gray-600/25 text-sm text-black ring-1 ring-inset ring-gray-300/25 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                  </div>
                  <div className="relative mb-6">
                    <label htmlFor="confidence" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confidence level (Be confident!)</label>
                    <input name="confidence" type="range" min="1" max="5" placeholder="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">1</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">3</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">4</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">5</span>
                  </div>
                  <div>
                    <label htmlFor="stage" className="text-sm text-white">
                      Interview stage
                    </label>
                    <input name="stage" type="text" placeholder="e.g. Online Assessment" className="w-full rounded-md border-[1.75px] py-1 px-2 border-gray-600/25 text-sm text-black ring-1 ring-inset ring-gray-300/25 focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                  </div>
                  <button type="submit" className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto bg-blue-600 hover:bg-blue-500">
                    Add
                  </button>
                </form>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}