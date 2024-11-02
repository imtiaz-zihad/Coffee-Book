import { Outlet } from "react-router-dom";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";

const MainLayout = () => {
  return (
    <div>
      {/*   NAVBAR   */}
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-232px)] py-12">
        <Outlet />
      </div>
      {/*   Footer   */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
