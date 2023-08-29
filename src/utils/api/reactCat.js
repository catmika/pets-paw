import axios from "axios";

const reactCat = async (catImageId, value) => {
  const postData = {
    image_id: catImageId,
    sub_id: process.env.NEXT_PUBLIC_USER_ID,
    value, // 1 - like/ -1 - dislike
  };

  try {
    await axios.post("https://api.thecatapi.com/v1/votes", postData, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY,
      },
    });
  } catch (error) {
    console.error("Error recording vote:", error);
  }
};

export { reactCat };
