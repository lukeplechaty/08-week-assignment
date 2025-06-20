"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Load } from "#/Load";
import { Delete } from "#/Delete";

export default function Comments(props) {
  const [comments, setcomments] = useState([]);
  const [ids, setids] = useState([]);
  useEffect(() => {
    async function run(params) {
      const data = await Load(props.id);
      setcomments(data);
      const temp = localStorage.getItem("ids")
        ? JSON.parse(localStorage.getItem("ids"))
        : [{ id: 0 }];
      setids(temp);
    }
    run();
  }, []);

  async function run(params) {
    await Delete(props.id, params);
    redirect(`/posts/${props.id}`);
  }
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.msg}</p>
          {ids.map((val) =>
            val.id === comment.id ? (
              <button key={val.id} onClick={() => run(val.id)}>
                Delete
              </button>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
}
