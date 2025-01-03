import React from 'react'
import Content from './Content'
import { getServerSession } from 'next-auth';
import { jobs } from '../_db/schema';
import { authOptions } from '../auth';
import { eq } from 'drizzle-orm';
import { db } from '../_db';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (session?.user?.id) {
    const userJobs = await db
      .select()
      .from(jobs)
      .where(eq(jobs.userId, session.user.id));

    return (
      <div className="flex flex-col w-screen overflow-y-auto pb-10">
        <Content jobs={userJobs} />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col w-screen overflow-y-auto pb-10">
        No user with that ID was found
      </div>
    )
  }
}
