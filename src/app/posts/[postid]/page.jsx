import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import { db } from "@/utils/dbConnection";

export async function generateMetadata({ params }) {
  const props = await params;
  const query = await db.query(`SELECT * FROM week08blogs WHERE id=$1`, [
    props.postid,
  ]);
  const post = await query.rows[0];
  return {
    title: `Luke's Blog - Post ${post.name}`,
    description: `This Post is ${post.name}`,
  };
}

export default async function Blog({ params }) {
  const props = await params;
  const query = await db.query(`SELECT * FROM week08blogs WHERE id=$1`, [
    props.postid,
  ]);
  const post = query.rows[0];
  return (
    <>
      <h2>Name: {post.name}</h2>
      <p>Blog: {post.blog}</p>
      <CommentForm id={post.id} />
      <Comments id={post.id} />
    </>
  );
}
