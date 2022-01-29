import "./App.css";
import Home from "./Screens/Home";
import {
  Route,
  Link,
  BrowserRouter,
  Switch,
  Routes,
  NavLink,
} from "react-router-dom";
import TvShows from "./Screens/TvShows";
import TopTab from "./Components.js/TopTab";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <TopTab />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvShows" element={<TvShows />} />
      </Routes>
    </div>
  );
}

export default App;
