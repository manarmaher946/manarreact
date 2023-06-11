import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { addMovie } from "./Store/Actions/AddMovie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { removeMovie } from "./Store/Actions/RemoveMove";

 function Card({title,poster,date,id,move}){
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
    const dispatch = useDispatch();
    // const handleChange = () => {
    //     dispatch(addMovie(move))
    // }
    const favorites = useSelector((state) => state.addRed.favorites)

    const isFavorite = favorites.some((favMovie) => favMovie.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovie(id));
    } else {
      dispatch(addMovie(move));
    }
  };
    return(
        
  <div className="col">
    <div className="card h-100" style={{width:"300px"}}>
    
      <Link to={`/move/${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster}`} className="card-img-top" ></img></Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{formatDate(date)}</p>
        {isFavorite ? (
        <span>
          <FontAwesomeIcon icon={faStar} color="gold" size="2x" onClick={() => handleToggleFavorite()}/>
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon={faStar} size="2x"  onClick={() => handleToggleFavorite()}/>
        </span>
      )}
        
      </div>
    </div>
  </div>

    )
}

export default Card