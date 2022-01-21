import Home from "./pages/Home";
import Products from "./pages/Products";
import "./styles/app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Rewards from "./pages/Rewards";
import Gifts from "./pages/Gifts";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Products />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/giftcards" element={<Gifts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
