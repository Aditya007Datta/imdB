import Link from "next/link";

export default function NavbarItem({ title, param }) {
  return (
    <div className="">
      <Link href={param} className=" hover:text-cyan-200">
        <p className="hidden sm:inline my-2 font-mono font-semibold ">
          {title}
        </p>
      </Link>
    </div>
  );
}
