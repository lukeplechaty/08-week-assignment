import Link from "next/link";
import { db } from "#/dbConnection";
import { sortLinks } from "#/Links";

export const metadata = {
  title: "Luke's Blog - Posts",
  description: "Posts of all blogs",
};

export default async function Posts({ searchParams }) {
  const res = await db.query(`SELECT id,name FROM week08blogs`);
  const posts = res.rows;
  const query = await searchParams;
  if (query.sort === "asc")
    posts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  else if (query.sort === "desc")
    posts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  else if (query.sort === "rev") posts.reverse();

  return (
    <div>
      <h1 className="text-center p-2 text-3xl font-bold">Blog Posts</h1>
      <nav className="flex justify-center gap-5 p-2">
        {sortLinks.map((link) => (
          <Link key={link.key} href={link.href}>
            <h2 className="hover:text-blue-500">{link.name}</h2>
          </Link>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-5 p-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="p-1">
            <h2 className="text-blue-300 hover:text-blue-500 text-xl">
              {post.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
