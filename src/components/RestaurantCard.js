const RestaurantCard = (props) => {
    const {resData} = props;
    const {
      name,
      cuisines,
      avgRatingString,
      sla,
      cloudinaryImageId
    } = resData.info
    return (
      <div className="restaurant-card">
            <div className="res-img-container">
               {/**
               comments
                */}
                  <img alt="res-img" className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRatingString} stars</h3>
            <h3>{sla.slaString}</h3>
      </div>
    )
  }

  export default RestaurantCard;