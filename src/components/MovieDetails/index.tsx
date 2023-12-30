import { useParams } from "react-router-dom";
import { movies } from "../../data/movieData";

const MovieDetails = () => {
  const { movieId } = useParams();

  const movieChoice = movies.find((item) => item.id === Number(movieId));

  return (
    <div className="comp purple">
      <h3>{movieChoice?.title}</h3>
      <p>{movieChoice?.description}</p>
    </div>
  );
};

export default MovieDetails;
