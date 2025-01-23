import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Products from "./CarProduct/Products";
import AboutUS from "./Pages/AboutUs/AboutUS";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="Aboutus" element={<AboutUS />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
