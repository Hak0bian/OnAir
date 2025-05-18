import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <section>
      <Navigation />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Layout