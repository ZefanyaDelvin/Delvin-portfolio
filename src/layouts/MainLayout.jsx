import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main>
          <div>{children}</div>
        </main>

        {/* Footer */}
        <Footer />
    </>
  );
};

// PropTypes
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
