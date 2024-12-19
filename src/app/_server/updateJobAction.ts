'use server'

import { db } from '../_db';
import { jobs } from '../_db/schema'
import { revalidatePath } from 'next/cache';
import { stageType } from '../_types/stageTypes';
import { eq } from 'drizzle-orm';

export default async function addJobAction(data: FormData, id: number, stage: stageType): Promise<void> {
  try {
    const confidence = data.get('confidence');
    await db
        .update(jobs)
        .set({
            stage: stage,
            confidence: parseInt(confidence),
        })
        .where(eq(jobs.id, id));
    revalidatePath('/');
  } catch (error) {
    console.error('Error inserting job:', error);
  }
}
