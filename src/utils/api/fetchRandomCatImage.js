import axios from "axios";

const fetchRandomCatImage = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search");
    const data = response.data;
    const catImage = data.length > 0 ? data[0] : null;
    return catImage;
  } catch (error) {
    console.error("Error fetching random cat image:", error);
    return null;
  }
};

export { fetchRandomCatImage };
