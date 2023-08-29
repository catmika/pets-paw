import Image from "next/image";
import { RoundButton } from "../RoundButton/RoundButton";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <SearchBar />
      <RoundButton>
        <Image
          src="/icons/like-30.png"
          width={20}
          height={20}
          alt="smile face"
        />
      </RoundButton>
      <RoundButton>
        <Image src="/icons/fav-30.png" width={20} height={20} alt="heart" />
      </RoundButton>
      <RoundButton>
        <Image
          src="/icons/dislike-30.png"
          width={20}
          height={20}
          alt="sad face"
        />
      </RoundButton>
    </div>
  );
};

export { Navbar };
