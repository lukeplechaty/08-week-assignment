"use server";
import { db } from "@/utils/dbConnection";
export async function Load(id) {
  const query = await db.query(
    `SELECT id,name,msg FROM week08comments WHERE blog_id=$1 ORDER BY id ASC`,
    [id]
  );
  return query.rows;
}
