import { ImHome } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div className="flex my-5 justify-between  max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={ImHome} />
        <MenuItem title="ABOUT" address="/about" Icon={FcAbout} />
      </div>
      <div className="flex items-center space-x-8">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl font-mono font-bold">
            <span className=" bg-amber-600 text-yellow-50 py-1 px-2 rounded-md">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline mr-7">clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
