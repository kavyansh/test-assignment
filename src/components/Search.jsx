import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="search">
      <label htmlFor="search__input">
        <FiSearch className="search__icon" />
      </label>
      <input
        id="search__input"
        type="text"
        className="search__input"
        placeholder="Search something..."
      />
    </div>
  );
}

export default Search;
