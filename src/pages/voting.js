import Layout from "@/components/Layout/Layout";
import { Navbar } from "@/components/Navbar/Navbar";
import { PageLabel } from "@/ui/PageLabel/PageLabel";
import styles from "../styles/voting.module.css";
import { BackButton } from "@/components/BackButton/BackButton";
import Image from "next/image";
import VotingBar from "@/components/VotingBar/VotingBar";
import { UserActionLog } from "@/components/UserActionLog/UserActionLog";
import { fetchRandomCatImage } from "@/utils/api/fetchRandomCatImage";
import { useState } from "react";
import { getFavourites } from "@/utils/api/getFavourites";

const Voting = ({ catImage, isCatFavourite }) => {
  const [currentCatImage, setCurrentCatImage] = useState(catImage);

  const [isFavourite, setIsFavourite] = useState(isCatFavourite);

  const [userActions, setUserActions] = useState(() => {
    if (typeof window !== "undefined") {
      const storedActions = localStorage.getItem("userActions");
      return storedActions ? JSON.parse(storedActions) : [];
    }
  });

  const handleUserReaction = async () => {
    const newCatImage = await fetchRandomCatImage();
    setCurrentCatImage(newCatImage);
    const favourites = await getFavourites();
    if (!favourites.includes((obj) => obj.image_id === currentCatImage.id))
      setIsFavourite(false);
  };

  return (
    <main className="main">
      <Layout />
      <div className={styles.rightContainer}>
        <Navbar />
        <section className={styles.section}>
          <div className={styles.label}>
            <BackButton />
            <PageLabel>VOTING</PageLabel>
          </div>
          <div className={styles.votingContainer}>
            {currentCatImage && (
              <Image
                className={styles.image}
                src={currentCatImage.url}
                width={500}
                height={300}
                alt="cat"
              />
            )}
            <VotingBar
              catImageId={currentCatImage.id}
              onReaction={handleUserReaction}
              userActions={userActions}
              setUserActions={setUserActions}
              isFavourite={isFavourite}
              setIsFavourite={setIsFavourite}
            />
          </div>
          <UserActionLog userActions={userActions} />
        </section>
      </div>
    </main>
  );
};

export const getServerSideProps = async () => {
  try {
    const catImage = await fetchRandomCatImage();

    const favourites = await getFavourites();
    const isCatFavourite = favourites.some(
      (obj) => obj.image_id === catImage.id
    );

    return {
      props: {
        catImage,
        isCatFavourite,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        catImage: null,
        isCatFavourite: false,
      },
    };
  }
};

export default Voting;
