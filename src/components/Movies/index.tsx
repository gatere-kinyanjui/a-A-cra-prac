import { NavLink, Outlet } from "react-router-dom";
// import MovieDetails from "../MovieDetails";

interface IMoviesProps {
  movies: {
    id: number;
    title: string;
    description: string;
  }[];
}

const Movies = ({ movies }: IMoviesProps) => {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>

      <nav className="">
        {movies.map((movie) => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  );
};

export default Movies;
