import { CDN_URL } from '../utili/constant';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      className="p-4 m-4 w-[300px] h-[500px] rounded-lg hover:bg-green-200  hover:scale-105 transition-duration:1000ms transition-transform bg-green-50  border-s shadow-md"
      
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="res-card-content">
        <h3 className="py-4 font-bold text-l">{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo } </h4>
        <h4>{sla?.slaString} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
