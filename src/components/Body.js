import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import {useState} from "react";
import SearchBox from "./searchBox";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState(resData);
    
    return <div className="body">
      <div className="search-container">
        {/* <SearchBox resData={resData} setRestaurantData={setRestaurantData}/> */}
          <input type="text" placeholder="Search..." onKeyUp={
            (event) => {
             setRestaurantData(() => resData.filter((restaurant) => {
                const res = restaurant.info.name.toLowerCase();
                const val = event.target.value.toLowerCase();
                return res.includes(val)
             }))
             }
        } />
      </div>
      <div className="restaurant-container">
        {
          restaurantData.map((restaurant) => (
            <RestaurantCard key={self.crypto.randomUUID()} resData={restaurant} />
          ))
        }
      
      </div>
    </div>;
  };

  export default Body;