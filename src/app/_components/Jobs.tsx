import React from 'react'
import { db } from '../_db';
import JobCards from './JobCards';
import { getServerSession } from 'next-auth';
import { jobs } from '../_db/schema';
import { authOptions } from '../auth';
import { eq } from 'drizzle-orm';

export default async function Jobs() {
  const session = await getServerSession(authOptions);
  const userJobs = await db
    .select()
    .from(jobs)
    .where(eq(jobs.userId, session.user.id));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
      {
        userJobs.map((job, index) => (
          <JobCards key={index} job={job} />
        ))
      }
    </div>
  )
}
