/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Card = ({ coffee , handleRemove}) => {
  // eslint-disable-next-line no-unused-vars
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};

    const {pathname} = useLocation()
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
      {
        pathname === '/dashboard' && <div onClick={()=>handleRemove(id)} className="absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5"><FaTrashAlt size={20}/></div>
      }
    </div>
  );
};

export default Card;
