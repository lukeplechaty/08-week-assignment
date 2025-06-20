import Load from "#/Load";
import DeleteButton from "./DeleteButton";

export default async function Comments(props) {
  const data = await Load(props.id);
  return (
    <div className="p-1">
      {data.map((comment) => (
        <div key={comment.id} className="p-3">
          <h2 className="text-xl font-bold">{comment.name}</h2>
          <p>{comment.msg}</p>
          <DeleteButton id={comment.id} pageid={props.id} />
        </div>
      ))}
    </div>
  );
}
