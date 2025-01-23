import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Products from "./CarProduct/Products";

import HelperCenter from "./Pages/HelperCenter/HelperPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="HelperPage" element={<HelperCenter />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
