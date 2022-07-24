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
import Login from "./Screens/Auth/Login";
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
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/navigation/*" element={<Navigation />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
      {/* <Auth />
      <Navigation /> */}
    </div>
  );
}
function Auth() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        //   overflow: "hidden",
        //   overflowX: "hidden",
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

function Navigation() {
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
        <Route path="/home" element={<Home />} />
        <Route path="/tvShows" element={<TvShows />} />
      </Routes>
    </div>
  );
}
export default App;
