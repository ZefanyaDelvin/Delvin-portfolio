import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./page/Main.jsx/MainPage";
import Portfolio from "./page/Portfolio/Portfolio";
import ATS from "./page/PortfolioCollection/ATS";
import MusicApp from "./page/PortfolioCollection/MusicApp";
import MI from "./page/PortfolioCollection/MI";
import Payroll from "./page/PortfolioCollection/Payroll";
import Certification from "./page/PortfolioCollection/Certification";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/ats" element={<ATS />} />
          <Route path="/portfolio/MI" element={<MI />} />
          <Route path="/portfolio/payroll" element={<Payroll />} />
          <Route path="/portfolio/certification" element={<Certification />} />
          <Route path="/portfolio/recog-app" element={<MusicApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
