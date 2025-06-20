"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Delete from "#/Delete";
export default function DeleteButton(props) {
  const [ids, setids] = useState([]);
  useEffect(() => {
    async function run(params) {
      const temp = localStorage.getItem("ids")
        ? JSON.parse(localStorage.getItem("ids"))
        : [{ id: 0 }];
      setids(temp);
    }
    run();
  }, []);
  async function run(val) {
    await Delete(props.id, val);
    redirect(`/posts/${props.pageid}`);
  }
  return (
    <>
      {ids.map((val) =>
        val.id === props.id ? (
          <button
            key={val.id}
            onClick={() => run(val.id)}
            className="border-1 border-s-gray-600 bg-red-950 hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        ) : null
      )}
    </>
  );
}
