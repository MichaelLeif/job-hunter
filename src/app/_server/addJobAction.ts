'use server'

import { db } from '../_db';
import { getServerSession } from 'next-auth';
import { jobs } from '../_db/schema'
import { authOptions } from '../auth';
import { revalidatePath } from 'next/cache';
import { stageType } from '../_types/stageTypes';

export default async function addJobAction(data: FormData, stage: stageType): Promise<void> {
  try {
    const company = data.get('company');
    const role = data.get('job-role');
    const confidence = data.get('confidence');
    const session = await getServerSession(authOptions);
    console.log(session);
    await db.insert(jobs).values({
      company,
      role,
      stage: stage.stage,
      confidence: parseInt(confidence),
      userId: session.user.id,
    });
    revalidatePath('/');
  } catch (error) {
    console.error('Error inserting job:', error);
  }
}
