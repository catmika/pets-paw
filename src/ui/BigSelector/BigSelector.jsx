import Image from "next/image";
import styles from "./big-selector.module.css";

const BigSelector = ({ src, alt, width, height, background, children }) => {
  const containerClasses = `${styles.image} ${styles[background]}`;

  return (
    <div className={styles.bigSelector}>
      <div className={containerClasses}>
        <Image src={src} height={height} width={width} alt={alt} />
      </div>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export { BigSelector };
