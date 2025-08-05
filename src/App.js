import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Hello from './Hello';
import Contact from "./Contact";
import OurStory from "./OurStory";
import Footer from "./Footer";
import Yoga from "./Yoga";
import YogaWithSerap from "./YogaWithSerap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // 👇 Add basename with your GitHub repo name
    <Router basename="/surf">  
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hello />
              <OurStory /> {/* Our Story Section */}
              <Yoga />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Yoga with Serap Page */}
        <Route
          path="/yoga-with-serap"
          element={
            <>
              <YogaWithSerap />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
