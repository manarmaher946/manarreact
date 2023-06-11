import { useEffect, useState } from "react"
import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {Link} from "react-router-dom" // browserroute, route,switch,link
import { ThemContext } from "./Context/themContext";
import { changeLang } from "./Store/Actions/language";

function Navbar(){
  const [keyword, setKayword] = useState("");

  const handleChange = (e) => {
    setKayword(e.target.value)
}
const count = useSelector((state) => state.addRed.count)

const {contextThem, setContextThem} = useContext(ThemContext)
const lang = useSelector((state) => state.langRed.lang)
    const dispatch = useDispatch() // to call the action

    const changeLangFun  = (e) =>{
      console.log(e.target.value)
        if(e.target.value=="EN"){
          dispatch(changeLang("EN"))
        }else{
          dispatch(changeLang("AR"))
        }
        
    }

    return(
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link className="navbar-brand"  to="/" > Movies </Link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/favorit" > Favorites <label 
        style={{color:"red"}} >{count}</label></Link> 
        </li>
        <button className="btn btn-info" aria-current="page"  onClick={() => setContextThem(contextThem === "light" ? "dark" : "light")}
      >Change</button> 
        </ul>
      <form class="d-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <select class="form-select" aria-label="Default select example" style={{width:"100px"}}
        onChange={changeLangFun}>
          <option value="EN">EN</option>
          <option value="AR">AR</option>

      </select>
        <li class="nav-item">
            <Link className="nav-link active" aria-current="page"  to="/login" > Login </Link> 
            </li>
            <li class="nav-item">
            <Link className="nav-link active" aria-current="page"  to="/register" > Register </Link> 
            </li>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handleChange(e)} value={keyword}></input>
            <Link to={`/moves/${keyword}`} class="btn btn-outline-success" type="submit">Search</Link>
            
        </ul>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar