// https://api.themoviedb.org/3/movie/754934?api_key=3f08daec7c10788a60573402322fa280
// fetching genres https://api.themoviedb.org/3/genre/movie/list?api_key=3f08daec7c10788a60573402322fa280
//https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

// import { getMovieDetails } from "../../test_api";
import * as apiProvider from '../../apiProvider/api'
import { Movie, MovieDetails } from "../../interfaces";
import classes from "./details.module.css";
import Overflow from "../../components/loader/overflow";

const humanReadableRuntime = (runtime: number) => {
  let h = Math.floor(runtime / 60);
  let m = runtime % 60;
  return `${h}h ${m}m`;
};

interface DetailsProps {
  movieId:number
}

const Details: React.FC<DetailsProps> = ({movieId}) => {
  const [movie, setMovie] = useState<MovieDetails>();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const initialCall = async () => {
      const movie = await apiProvider.getMovieDetails(movieId)
      setMovie(movie);
      setLoading(false)
    };
    initialCall();
  }, [movieId]);

  if (loading || !movie) {
    return(
      <div className={classes.placeholder}>
        <Overflow/>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`,
      }}
      className={classes.outer_wrapper}
    >
      <div className={classes.backdrop}>
        <div className={classes.inner_wrapper}>
          <div className={classes.image}>
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_face${movie?.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={classes.content}>
            <div className={classes.title}>
              <h1>{movie?.original_title}</h1>
            </div>

            <div className={classes.subtitle}>
              <div className={classes.release_date}>{movie?.release_date}</div>
              <div className={classes.divider}>
                <BsDot />
              </div>
              <div className={classes.genres}>
                <div className={classes.genre}>
                  {movie?.genres
                    .map((g) => {
                      return g.name;
                    })
                    .join(", ")}
                </div>
              </div>
              <div className={classes.divider}>
                <BsDot />
              </div>
              <div className={classes.runtime}>
                {humanReadableRuntime(movie.runtime)}
              </div>
            </div>

            <div className={classes.info}>
              <div className={classes.popularity}>{movie?.popularity} pts</div>
              <div className={classes.homepage}>
                <a href={movie.homepage} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <div className={classes.tagline}>{movie.tagline}</div>

            <div className={classes.overview}>
              <div>Overview</div>
              <div>{movie?.overview}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
