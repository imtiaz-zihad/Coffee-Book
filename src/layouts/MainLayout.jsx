import { Outlet } from "react-router-dom";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/*   NAVBAR   */}
     <div className="h-16">
     <NavBar></NavBar>
     </div>
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
        <Outlet />
      </div>
      {/*   Footer   */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
