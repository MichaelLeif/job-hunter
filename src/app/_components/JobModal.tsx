import React, { useState } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Dialog, DialogPanel } from '@headlessui/react'
import JobType from '../types/jobType'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { stages, stageType } from '../types/stageTypes';
import clsx from 'clsx';
import updateJobAction from '../_server/updateJobAction';
import deleteJobAction from '../_server/deleteJobAction';

interface JobModalProps {
  job: JobType;
  isOpen: boolean;
  setJobModal: (jobModal: boolean) => void;
}

export default function JobModal({job, isOpen, setJobModal}: JobModalProps) {
  const [query, setQuery] = useState(job.stage);
  const [stage, setStage] = useState<stageType>(job.stage);
  const [deleteAction, setDeleteAction] = useState(false);
  const filteredStages =
    query === ''
      ? stages
      : stages.filter((stage) => {
          return stage.toLowerCase().includes(query.toLowerCase())
        });
  const handleValue = (value: stageType | null) => {
    if (value !== null) {
      setStage(value);
    }
  };
  
  return (
    <div>
      <Dialog open={isOpen} as="div" onClose={() => setJobModal(false)} className="relative z-50">
        <div className="w-screen h-screen backdrop-blur-sm bg-slate-400/10 fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="bg-black w-full max-w-sm  md:max-w-md lg:max-w-lg h-[27rem] space-y-4 rounded-xl ring-1 ring-slate-400/30 p-6"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <span className="text-[1.5rem]">
                    {job.company}
                  </span>
                  <span className="text-lg">
                    {job.role}
                  </span>
                </div>
                <form className="flex flex-col gap-4" action={(e) => {
                    if (deleteAction) {
                      deleteJobAction(job.id);
                    } else {
                      updateJobAction(e, job.id, stage);
                    }
                  }} 
                  onSubmit={() => setJobModal(false)}
                >
                  <span>
                    Update your job details
                  </span>
                  <div>
                    <label className="text-sm text-white">
                      Are you up to the next stage?
                    </label>
                    <Combobox value={stage} onChange={handleValue} onClose={() => setQuery('')}>
                        <div className="relative">
                          <ComboboxInput
                            className={clsx(
                              'w-full rounded-lg border border-slate-400/30 bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
                              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                            displayValue={(stage: stageType) => stage}
                            onChange={(event) => setQuery(event.target.value)}
                          />
                          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                          </ComboboxButton>
                        </div>
                        <ComboboxOptions
                          anchor="bottom"
                          transition
                          className={clsx(
                            'z-20 bg-black w-[var(--input-width)] rounded-xl border border-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                          )}
                        >
                          {filteredStages.map((stage: stageType, index: number) => (
                            <ComboboxOption
                              key={index}
                              value={stage}
                              className="group flex bg-black cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                              <div className="text-sm/6 text-white">{stage}</div>
                            </ComboboxOption>
                          ))}
                        </ComboboxOptions>
                      </Combobox>
                  </div>
                  <div className="relative mb-6">
                    <label htmlFor="confidence" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surely your confidence is up now! Believe in yourself!</label>
                    <input name="confidence" type="range" min="1" max="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">1</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">3</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">4</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">5</span>
                  </div>
                  <button type="submit" className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto bg-blue-600 hover:bg-blue-500">
                    Add
                  </button>
                  <button type="submit" onClick={() => setDeleteAction(true)}className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto bg-blue-600 hover:bg-blue-500">
                    Delete
                  </button>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
