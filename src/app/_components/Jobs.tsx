import React, { useEffect, useState } from 'react'
import JobCards from './JobCards';
import JobType from '../types/jobType';
import JobModal from './JobModal';


export default function Jobs({ jobs }: {jobs: JobType[]}) {
  const [jobModal, setJobModal] = useState(false);
  const [jobInfo, setJobInfo] = useState<JobType>({} as JobType);
  useEffect(() => {
    if (jobModal == false) {
      setJobInfo({} as JobType);
    }
  }, [jobModal]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {
          jobs.map((job, index) => (
            <div key={index} onClick={() => {
              setJobInfo(job);
              setJobModal(true);
            }}>
              <JobCards key={index} job={job} />
            </div>              
          ))
        }
      </div>
      {
        Object.keys(jobInfo).length > 0 && <JobModal job={jobInfo} isOpen={jobModal} setJobModal={setJobModal} />
      }
    </>
  )
}
