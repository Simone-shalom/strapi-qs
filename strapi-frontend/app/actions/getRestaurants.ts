import axios from "axios";

export const getRestaurats = async () => {
  try {
    const response = await axios.get(
      "http://tasteful-beauty-b927f6b8b8.strapiapp.com/api/restaurants"
    );
    return response.data;
  } catch (error) {
    throw new Error("cannot get restaurants");
  }
};
