import Banner from "../componentes/Banner";
import Heading from "../componentes/Heading";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading title={"Browse Coffees by Category"} subtitle={"Choose your desired coffee category to browse through specific coffees that fit in your taste"}></Heading>
            {/* Categories tab section */}
            {/* Dynamic Nested COmponent */}
        </div>
    );
};

export default Home;