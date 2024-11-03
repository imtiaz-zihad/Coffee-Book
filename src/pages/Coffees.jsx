import { useLoaderData } from "react-router-dom";
import Card from "../componentes/Card";

const Coffees = () => {
  const data = useLoaderData();
  return (
    <>
    <div className="flex justify-between items-center">
      <div>text</div>
      <div>button</div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {data.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
