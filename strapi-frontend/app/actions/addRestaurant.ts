import axios from "axios";

export const getRestaurats = async ({ data }: any) => {
  try {
    const response = await axios.post(
      "http://tasteful-beauty-b927f6b8b8.strapiapp.com/api/restaurants",
      data
    );
    return response.data;
  } catch (error) {
    throw new Error("cannot Add restaurant");
  }
};
