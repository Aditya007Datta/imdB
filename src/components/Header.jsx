import { ImHome } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import MenuItem from "./MenuItem";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex my-5 justify-between mx-2 items-center">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={ImHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FcAbout} />
      </div>
      <div>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-600 text-yellow-50 py-1 px-2 rounded-md">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline mr-7">c l o n e</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
