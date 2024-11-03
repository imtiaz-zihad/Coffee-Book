import { useEffect, useState } from "react";
import Heading from "../componentes/Heading";
import { getAllFavorites, removeFavorite } from "../utils";
import Card from "../componentes/Card";
import { useLocation } from "react-router-dom";

const DashBoard = () => {

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }, []);

  const handleRemove = id =>{
    removeFavorite(id)
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }
  return (
    <>
      <Heading
        title={"Welcome to DashBoard"}
        subtitle={"Manage your favorite coffee "}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default DashBoard;
