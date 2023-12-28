import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Stocks from "./components/Stocks";
import PageNotFound from "./components/PageNotFound";
import NotLoggedIn from "./components/NotLoggedIn";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <nav className="nav comp">
        <ul>
          <li>
            <NavLink
              to={"/"}
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/stocks"}
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Stocks
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/movies"}
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/not-logged-in" element={<NotLoggedIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
