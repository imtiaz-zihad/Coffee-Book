/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Card = ({ coffee }) => {
  // eslint-disable-next-line no-unused-vars
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >

        <figure className="w-full h-48 overflow-hidden">
            <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
            <h1 className="text-xl">Name: {name}</h1>
            <p>{category}</p>
            <p>{type}</p>
            <p>{origin}</p>
            <p>{rating}</p>
            <p>{popularity}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
