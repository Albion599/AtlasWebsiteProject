import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Atlas from "./Pages/AtlasBenefitsPage/Atlas";
import Visa from "./Pages/VisaBenefitsPage/Visa";
import Request from "./Pages/RequestPage/Request";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Atlas />} />
          <Route path="/visabenefits" element={<Visa />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
