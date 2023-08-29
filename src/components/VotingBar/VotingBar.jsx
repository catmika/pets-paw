import { VotingButton } from "../VotingButton/VotingButton";
import { reactCat } from "@/utils/api/reactCat";
import { favouriteCat } from "@/utils/api/favouriteCat";
import styles from "./voting-bar.module.css";
import { useState } from "react";

const VotingBar = ({
  catImageId,
  onReaction,
  userActions,
  setUserActions,
  isFavourite,
  setIsFavourite,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLikeClick = () => {
    setIsLoading(true);
    reactCat(catImageId, 1);
    onReaction();
    setUserActions([
      ...userActions,
      { action: "like", imageId: catImageId, date: Date.now() },
    ]);
    localStorage.setItem("userActions", JSON.stringify(userActions));
    setIsLoading(false);
  };

  const handleDislikeClick = async () => {
    setIsLoading(true);
    await reactCat(catImageId, -1);
    await onReaction();
    setUserActions([
      ...userActions,
      { action: "dislike", imageId: catImageId, date: Date.now() },
    ]);
    localStorage.setItem("userActions", JSON.stringify(userActions));
    setIsLoading(false);
  };

  const handleFavouriteClick = () => {
    favouriteCat(catImageId);
    setUserActions([
      ...userActions,
      { action: "favourite", imageId: catImageId, date: Date.now() },
    ]);
    localStorage.setItem("userActions", JSON.stringify(userActions));
    setIsFavourite(true);
  };

  return (
    <div className={styles.votingBar}>
      <VotingButton
        background="green"
        position="left"
        onClick={handleLikeClick}
        isLoading={isLoading}
      >
        <div className={styles.like} />
      </VotingButton>
      {isFavourite || (
        <VotingButton
          background="red"
          position="center"
          onClick={handleFavouriteClick}
          isLoading={isLoading}
        >
          <div className={styles.favourite} />
        </VotingButton>
      )}
      <VotingButton
        background="yellow"
        position="right"
        onClick={handleDislikeClick}
        isLoading={isLoading}
      >
        <div className={styles.dislike} />
      </VotingButton>
    </div>
  );
};

export default VotingBar;
