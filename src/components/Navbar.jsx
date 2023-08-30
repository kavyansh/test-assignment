import Logo from "./Logo";
import DynamicNavigation from "./DynamicNavigation";
import Search from "./Search";

let links = [
  "Home",
  "Electronics",
  "Books",
  "Music",
  "Movies",
  "Clothing",
  "Games",
  "Furniture",
  "Sports",
  "Travel",
  "Botanical",
  "Winter",
];

function Navbar() {
  return (
    <header className="navbar">
      <Logo />
      <DynamicNavigation navLinksArray={links} />
      <Search />
    </header>
  );
}

export default Navbar;
