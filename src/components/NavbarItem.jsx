"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function NavbarItem({ title, param }) {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");
  return (
    <div className="">
      <Link
        href={`/?genre=${param}`}
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        }`}
      >
        <p className="hidden sm:inline my-2 font-mono font-semibold">{title}</p>
      </Link>
    </div>
  );
}
