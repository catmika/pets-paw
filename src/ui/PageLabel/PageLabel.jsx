import styles from "./page-label.module.css";

const PageLabel = ({ children }) => {
  return <label className={styles.label}>{children}</label>;
};

export { PageLabel };
