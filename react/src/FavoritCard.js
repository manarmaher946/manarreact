import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { addMovie } from "./Store/Actions/AddMovie";
import { removeMovie } from "./Store/Actions/RemoveMove";

 function FavoritCard({title,poster,date,id}){
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }

      const dispatch = useDispatch();
    const handleChange = () => {
        dispatch(removeMovie(id))
    }
    
    return(
        
  <div className="col">
    <div className="card h-100" style={{width:"300px"}}>
      <Link to={`/move/${id}`}><img src={`https://image.tmdb.org/t/p/w500/${poster}`} className="card-img-top" ></img></Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{formatDate(date)}</p>
        <button className="btn btn-danger" onClick={() => handleChange()}>Delete </button>
      </div>
    </div>
  </div>

    )
}

export default FavoritCard