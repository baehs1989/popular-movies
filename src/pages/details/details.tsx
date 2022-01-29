import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

// import { getMovieDetails } from "../../test_api";
import * as apiProvider from '../../apiProvider/api'
import { MovieDetails } from "../../interfaces";
import classes from "./details.module.css";
import Overflow from "../../components/loader/overflow";
import { useTypedSelector } from "../../hook/useTypeSelector"
import {useActions} from '../../hook/useAction'


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

  const favorite = useTypedSelector(({movies:{list}})=>{
    return list
  })
  const {addMovie, deleteMovie} = useActions()

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
      <div className={classes.placeholder} data-test="loading">
        <Overflow/>
      </div>
    )
  }

  const onClickLikeButton = (event:React.MouseEvent<HTMLDivElement>) =>{
    event.stopPropagation()
    if (favorite.includes(movieId)){
      deleteMovie(movieId)
    }else{
      addMovie(JSON.parse(JSON.stringify(movie)))
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`,
      }}
      className={classes.outer_wrapper}
      data-test="details"
    >
      
      <div className={classes.backdrop}>
      <div className={classes.favorite} onClick={onClickLikeButton}>
                {
                    favorite.includes(movieId)?
                    <AiFillHeart/>
                    :
                    <AiOutlineHeart/>
                }
          </div>
        <div className={classes.inner_wrapper}>
          
          <div className={classes.image}>
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_face${movie?.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={classes.content}>
            
            <div className={classes.title}>
              <h1>{movie?.title}</h1>
              {
                movie?.title !== movie?.original_title &&
                <h1>{movie?.original_title}</h1>
              }
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
