import axios from "axios";

const getFavourites = async () => {
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/favourites?sub_id=${userId}`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting favourites:", error);
    return null;
  }
};

export { getFavourites };
