import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex justify-center">
      <NavbarItem title="TRENDING" param="fetchTrending" />
      <NavbarItem title="CLASSICS" param="fetchClassic" />
    </div>
  );
}

export default Navbar;
