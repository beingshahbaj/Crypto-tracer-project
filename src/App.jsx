import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Landingpage from "./components/Landingpage";
import Compare from "./components/Compare";
import Dashboard from "./components/Dashbord";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Landingpage />} />
        <Route path="compare" element={<Compare />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
