 import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Hello from './Hello';
import Contact from "./Contact";
import OurStory from "./OurStory";
import Footer from "./Footer";
import Yoga from "./Yoga";
import YogaWithSerap from "./YogaWithSerap";
import Rentals from "./Rentals";
import RentalPrices from "./RentalPrices"; // ✅ Import new page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tour from './Tour';
import Team from './Team';


function App() {
  return (
    // ✅ For GitHub Pages, use basename
    <Router basename="/surf">
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hello />
              <OurStory />
              
              <Rentals />
              <Tour/>
              <Yoga />
              <Team/>
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Yoga with Serap Page */}
        <Route
          path="/yoga-with-serap"
          element={<YogaWithSerap />}
        />

        {/* ✅ Rental Prices Page */}
        <Route
          path="/rental-prices"
          element={<RentalPrices />}
        />
      </Routes>
    </Router>
  );
}

export default App;