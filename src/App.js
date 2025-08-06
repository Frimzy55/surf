import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Hello from './Hello';
import Contact from "./Contact";
import OurStory from "./OurStory";
import Footer from "./Footer";
import Yoga from "./Yoga";
import YogaWithSerap from "./YogaWithSerap";
import Rentals from "./Rentals";
import RentalPrices from "./RentalPrices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tour from './Tour';
import Team from './Team';
import BeginnerLessons1 from './BeginnerLessons1';
import BeginnerBooking from "./BeginnerBooking";
import EvansBio from "./EvansBio";
import MaryBio from "./Emmanuel";
import JohnBio from "./JohnBio";
import Intermediate from './Intermediate';
import Advanced from './Advanced';

function App() {
  return (
    <Router basename="/surf">
      {/* ✅ Navbar on every page */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hello />
              <Team />
              <OurStory />
              <BeginnerLessons1 />
              <Intermediate/>
              <Advanced/>
              <Rentals />
              <Tour />
              <Yoga />
              
              <Contact />
            </>
          }
        />

        {/* Yoga with Serap Page */}
        <Route path="/yoga-with-serap" element={<YogaWithSerap />} />

        {/* Rental Prices Page */}
        <Route path="/rental-prices" element={<RentalPrices />} />

        {/* Beginner Lesson Booking Page */}
        <Route path="/beginner-booking" element={<BeginnerBooking />} />

        <Route path="/bio/evans" element={<EvansBio />} />
        <Route path="/bio/mary" element={<MaryBio />} />
        <Route path="/bio/john" element={<JohnBio />} />
      </Routes>

      {/* ✅ Footer on every page */}
      <Footer />
    </Router>
  );
}

export default App;
