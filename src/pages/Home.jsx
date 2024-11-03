import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../componentes/Banner";
import Heading from "../componentes/Heading";
import Categories from "../componentes/Categories";

const Home = () => {
    const categories = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste"
        }
      ></Heading>
      {/* Categories tab section */}
      <Categories categories={categories} />

      <Outlet />
      {/* Dynamic Nested COmponent */}
    </div>
  );
};

export default Home;
