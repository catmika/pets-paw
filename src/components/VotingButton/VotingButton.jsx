import styles from "./voting-button.module.css";

const VotingButton = ({
  children,
  background,
  position,
  onClick,
  isLoading,
}) => {
  const containerClasses = `${styles.button} ${styles[background]} ${styles[position]}`;

  return (
    <div className={containerClasses}>
      <button
        disabled={isLoading}
        className={styles.buttonTransparent}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export { VotingButton };
