"use client";
export default function Comment(props) {
  let ids = [];
  try {
    ids = JSON.parse(localStorage.getItem("ids"));
  } catch (error) {}
  return (
    <>
      <h2>{props.comment.name}</h2>
      <p>{props.comment.msg}</p>
      {}
    </>
  );
}
