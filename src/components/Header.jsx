"use client";
import Link from "next/link";
import { mainLinks } from "@/libs/Links";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="flex justify-center gap-[10px]">
        {mainLinks.map((link) => (
          <Link
            key={link.key}
            className={
              ""
              //   pathname === link.href ? style.selected : style.unselected
            }
            href={link.href}
          >
            <h2>{link.name}</h2>
          </Link>
        ))}
      </nav>
    </header>
  );
}
