import { getRestaurats } from "./actions/getRestaurants";
import axios from "axios";

const Home = async () => {
  const restaurants = await getRestaurats();
  console.log(restaurants);

  return (
    <ul>
      {restaurants.data.map((restaurant: any) => (
        <p key={restaurant.id}>{restaurant.attributes.name}</p>
      ))}
    </ul>
  );
};

export default Home;
