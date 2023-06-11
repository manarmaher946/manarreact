import { useSelector } from "react-redux"
import Card from "./Card"
import FavoritCard from "./FavoritCard"

function FavoritesComponent(){

    const movies = useSelector((state) => state.addRed.favorites)
    console.log(movies)
    return(
        <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.length==0 ? (
        <h1 style={{color:"red"}}>Not favorite movie</h1>
      ) : (
        <>
        {movies.map((move) => {
                    return(
                        <FavoritCard title={move.title} poster={move.poster_path} date={move.release_date} id={move.id} />
                    )
                })}
        </>
      )}
        
        </div>
        </div>
    )
}

export default FavoritesComponent 