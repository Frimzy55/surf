import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import Hello from './Hello';
import Contact from "./Contact";
import OurStory from "./OurStory";
import Footer from "./Footer";
import Yoga from "./Yoga";
import YogaWithSerap from "./YogaWithSerap";
import Rentals from "./Rentals";
import RentalPrices from "./RentalPrices";
import Tour from './Tour';
import Team from './Team';
import BeginnerLessons1 from './BeginnerLessons1';
import BeginnerBooking from "./BeginnerBooking";
import EvansBio from "./EvansBio";
import MaryBio from "./Emmanuel";
import JohnBio from "./JohnBio";
import Intermediate from './Intermediate';
import Advanced from './Advanced';
import Missions from './Missions';
import BookSession1 from './BookSession1';
//import IntermediateBooking from "./IntermediateBooking"; // ✅ If you have it
//import GoogleReviews from './GoogleReviews';
//import Reviews from './Reviews';


function App() {
  return (
    <Router >
      <Routes>
        {/* ✅ Homepage route with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hello />
              <Team />
              <OurStory />
              <Missions />
              <BeginnerLessons1 />
              <Intermediate />
              <Advanced />
              <Rentals />
              <Tour />
              <Yoga />
              <Contact />
              
              
              <Footer />
            </>
          }
        />

        {/* ✅ Other routes without Navbar */}
        <Route path="/yoga-with-serap" element={<><YogaWithSerap /></>} />
        <Route path="/rental-prices" element={<><RentalPrices /></>} />
        <Route path="/beginner-booking" element={<><BeginnerBooking /></>} />
         <Route path="/booking" element={<><BookSession1 /></>} />
        

        <Route path="/evans" element={<><EvansBio /></>} />
        <Route path="/emmanuel" element={<><MaryBio /></>} />
        <Route path="/samuel" element={<><JohnBio /></>} />
      </Routes>
    </Router>
  );
}

export default App;
