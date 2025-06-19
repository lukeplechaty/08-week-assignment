import { db } from "@/utils/dbConnection";
import Comment from "./Comment";
export default async function Comments(props) {
  const query = await db.query(
    `SELECT id,name,msg FROM week08comments WHERE blog_id=$1 ORDER BY id ASC`,
    [props.id]
  );
  const comments = query.rows;
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
}
