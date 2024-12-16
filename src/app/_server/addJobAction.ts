'use server'

import { db } from '../_db';
import { getServerSession } from 'next-auth';
import { jobs } from '../_db/schema'
import { authOptions } from '../auth';
import { revalidatePath } from 'next/cache';

export default async function addJobAction(data: FormData): Promise<void> {
  try {
    const company = data.get('company');
    const role = data.get('job-role');
    const confidence = data.get('confidence');
    const stage = data.get('stage');
    const session = await getServerSession(authOptions);
    console.log(session);
    const result = await db.insert(jobs).values({
      company,
      role,
      stage,
      confidence: parseInt(confidence),
      userId: session.user.id,
    });
    revalidatePath('/');
  } catch (error) {
    console.error('Error inserting job:', error);
  }
}
