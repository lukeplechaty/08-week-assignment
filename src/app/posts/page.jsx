import Link from "next/link";
import { db } from "@/utils/dbConnection";
import { sortLinks } from "@/libs/Links";

export const metadata = {
  title: "Luke's Blog - Posts",
  description: "posts of all blogs",
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
    <>
      <h1 className="text-center ">Blog Posts</h1>
      <nav className="flex justify-center gap-5">
        {sortLinks.map((link) => (
          <Link key={link.key} href={link.href}>
            <h2>{link.name}</h2>
          </Link>
        ))}
      </nav>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <h2>{post.name}</h2>
        </Link>
      ))}
    </>
  );
}
