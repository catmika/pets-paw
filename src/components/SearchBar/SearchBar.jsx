import { useState } from "react";
import styles from "./search-bar.module.css";
import Image from "next/image";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for breeds by name"
        value={searchTerm}
        onChange={handleInputChange}
        required
      />
      <button className={styles.button} onClick={handleSearch}>
        <div className={styles.imageWrapper}>
          <Image
            src="/icons/search-20.png"
            width={15}
            height={15}
            alt="magnifying glass"
          />
        </div>
      </button>
    </div>
  );
};

export { SearchBar };
