import axios from "axios";

const favouriteCat = async (catImageId) => {
  const postData = {
    image_id: catImageId,
    sub_id: process.env.NEXT_PUBLIC_USER_ID,
  };

  try {
    const response = await axios.post(
      "https://api.thecatapi.com/v1/favourites",
      postData,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY,
        },
      }
    );
  } catch (error) {
    console.error("Error recording vote:", error);
  }
};

export { favouriteCat };
