"use server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
export default async function Save(params, id) {
  const name = params.get("name");
  const message = params.get("msg");
  const query = await db.query(
    `INSERT INTO week08comments (name, msg, blog_id) VALUES ($1, $2, $3) RETURNING id`,
    [name, message, id]
  );
  revalidatePath(`/posts/${id}`);
  return query.rows[0];
}
