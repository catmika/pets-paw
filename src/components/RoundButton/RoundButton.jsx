import styles from "./round-button.module.css";

const RoundButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export { RoundButton };
