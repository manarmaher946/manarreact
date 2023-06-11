import axios from "axios";
import { useEffect, useState } from "react"
import React from "react";
import Card from "./Card";
import { getMoviesList } from "./Store/Actions/movies";
import { useDispatch, useSelector } from "react-redux";


function MoviesComponent(){
    const movies = useSelector(state => state.movieRed.list) //[]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesList())
    },[])

    return(
        <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((move) => {
            return(
                <Card title={move.title} poster={move.poster_path} date={move.release_date} id={move.id} move={move}/>
            )
        })}
        </div>
        </div>
    )
}

export default MoviesComponent 