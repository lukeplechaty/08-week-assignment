"use server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
export async function Delete(postid, commentid) {
  await db.query(`DELETE FROM week08comments WHERE id=$1`, [commentid]);
  revalidatePath(`/posts/${postid}`);
}
