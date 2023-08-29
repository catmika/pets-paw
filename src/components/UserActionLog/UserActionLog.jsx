import styles from "./user-action-log.module.css";
import { formatDate } from "../../utils/helpers/formatDate.js";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserActionLog = ({ userActions }) => {
  ////////client side rendering component
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  //////////////

  const latestActions = userActions?.slice(-4);

  return (
    <div className={styles.userActionLog}>
      <ul className={styles.list}>
        {latestActions?.map((action) => (
          <li className={styles.listItem} key={action.date}>
            <span className={styles.time}>{formatDate(action.date)}</span>
            <span className={styles.imageId}>
              Image ID:&nbsp;
              <strong>{action.imageId}</strong>&nbsp;was added to
            </span>
            {action.action === "like" ? (
              <>
                <span>Likes </span>
                <Image
                  className={styles.image}
                  src="/icons/like-color-30.png"
                  width={15}
                  height={15}
                  alt="smile face"
                />
              </>
            ) : action.action === "dislike" ? (
              <>
                <span>Dislikes</span>
                <Image
                  className={styles.image}
                  src="/icons/dislike-color-30.png"
                  width={15}
                  height={15}
                  alt="sad face"
                />
              </>
            ) : (
              <>
                <span>Favourites</span>
                <Image
                  className={styles.image}
                  src="/icons/fav-color-30.png"
                  width={15}
                  height={15}
                  alt="heart"
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { UserActionLog };
