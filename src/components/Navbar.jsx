import NavbarItem from "./NavbarItem";
function Navbar() {
  return (
    <div className="flex justify-center dark:bg-slate-600 bg-amber-200 lg:text-lg p-5  dark:text-white lg:text-violet-500">
      <NavbarItem title="TRENDING" param="fetchTrending" />
      <NavbarItem title="CLASSICS" param="fetchClassic" />
    </div>
  );
}

export default Navbar;
