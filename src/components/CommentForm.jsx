"use client";
import { redirect } from "next/navigation";
import Save from "#/Save";
export default function CommentForm(props) {
  function local(commentId) {
    let ids = [];
    try {
      ids = localStorage.getItem("ids")
        ? JSON.parse(localStorage.getItem("ids"))
        : [];
    } catch (error) {}
    ids.push(commentId);
    localStorage.setItem("ids", JSON.stringify(ids));
  }
  async function run(params) {
    let id = await Save(params, props.id);
    local(id);
    redirect(`/posts/${props.id}`);
  }
  return (
    <form action={run} className="p-2">
      <fieldset className="flex flex-col">
        <legend>Add A Comment</legend>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border-1 border-s-white bg-gray-900"
        />
        <label htmlFor="msg">Message:</label>
        <textarea
          id="msg"
          name="msg"
          rows="4"
          cols="30"
          required
          className="border-1 border-s-white bg-gray-900"
        />
        <button
          type="submit"
          className="border-1 border-s-gray-600 bg-gray-950 hover:bg-gray-800 cursor-pointer"
        >
          submit
        </button>
      </fieldset>
    </form>
  );
}
