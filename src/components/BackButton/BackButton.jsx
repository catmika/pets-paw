import Image from "next/image";
import styles from "./back-button.module.css";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button className={styles.button} onClick={handleBack}>
      <Image src="/icons/back-20.png" width={10} height={10} alt="left arrow" />
    </button>
  );
};

export { BackButton };
