import axios from "axios";
import axiosRetry from "axios-retry";

const RestaurantFinder = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:7000/api/v1/restaurants"
      : "https://restaurates-6969.herokuapp.com/api/v1/restaurants",
  timeout: 5000,
});

axiosRetry(RestaurantFinder, { retries: 3 });

export default RestaurantFinder;
