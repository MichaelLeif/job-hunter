'use server'

import { db } from '../_db';
import { jobs } from '../_db/schema'
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

export default async function addJobAction(id: number): Promise<void> {
  try {
    await db.delete(jobs).where(eq(jobs.id, id));
    revalidatePath('/');
  } catch (error) {
    console.error('Error deleting job:', error);
  }
}
