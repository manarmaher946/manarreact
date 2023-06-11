import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";
import {useParams} from "react-router-dom"



function SearchName(){
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
    const move = useParams() 
   // console.log(move.name)
    const [singleMove, setSingleMove] = useState({})
    const apiKey = 'aa6fc65fcedb7431af3ac2fbe6484cd0';
   
      
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${move.name}`)
        .then((res) => {setSingleMove(res.data.results[0])
        console.log(res)})
        .catch((err) => console.log(err))
    }, [])

    return(
        <div className="container-fluid" style={{marginTop:"20px",textAlign:"left"}}>
        <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
            <img style={{height:"400px" ,width:"100%"}} src={`https://image.tmdb.org/t/p/w500/${singleMove.poster_path}`}  class="img-fluid rounded-start" ></img>
            </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{singleMove.title}</h5>
        <p class="card-text">{singleMove.overview}</p>
        <span>release_date:  </span>
        <span class="card-text" style={{color:"blue"}}>{formatDate(singleMove.release_date)}</span>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default SearchName 