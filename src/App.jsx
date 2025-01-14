import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          {/*<Route index element={<Home />} />*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;
