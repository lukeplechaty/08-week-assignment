"use client";
import Link from "next/link";
import { mainLinks } from "#/Links";
import { usePathname } from "next/navigation";
import style from "@/components/Header.module.css";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="p-2">
      <nav className="flex justify-center gap-[10px]">
        {mainLinks.map((link) => (
          <Link
            key={link.key}
            className={`hover:text-blue-500 
              ${pathname === link.href ? style.selected : style.unselected}`}
            href={link.href}
          >
            <h2>{link.name}</h2>
          </Link>
        ))}
      </nav>
    </header>
  );
}
