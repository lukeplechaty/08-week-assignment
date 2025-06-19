"use client";
import { redirect } from "next/navigation";
import { Save } from "@/libs/Save";
export default function CommentForm(props) {
  function local(commentId) {
    let ids = [];
    try {
      ids = JSON.parse(localStorage.getItem("ids"));
    } catch (error) {}
    ids.push(commentId);
    localStorage.setItem("ids", JSON.stringify(ids));
  }
  async function run(params) {
    let id = await Save(params, props.id);
    local(id);
    redirect(`/posts/${props.id}#end`);
  }
  return (
    <form action={run}>
      <fieldset>
        <legend>Add A Comment</legend>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="msg">Message:</label>
        <textarea id="msg" name="msg" rows="4" cols="50" required />
        <button type="submit">submit</button>
      </fieldset>
    </form>
  );
}
