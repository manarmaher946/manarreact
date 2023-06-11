import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TODOComponent from './TO_DOComponent';
import RegistrationComponent from './RegistrationComponent';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from './NotFound';
import Navbar from './Navbar';
import MoviesComponent from './MoviesComponent';
import FavoritesComponent from './Favorites';
import MoveComponent from './MoveComponent';
import SearchName from './SearchName';
import { ThemContext } from './Context/themContext';
import { useState } from 'react';


function App() {
  const [contextThem, setContextThem] = useState("light")

  return (

    <div className={contextThem === "light"? "bg-light text-dark App" : "bg-dark text-dark App"}>
      <ThemContext.Provider value={{contextThem, setContextThem}}>
        <BrowserRouter>
        <Navbar></Navbar>
            <Switch> 
              <Route   path={"/"} exact component={MoviesComponent} />
              <Route   path={"/login"} exact component={TODOComponent}   /> 
              <Route   path={"/register"} exact component={RegistrationComponent}   /> 

              <Route   path={"/favorit"} exact component={FavoritesComponent}   /> 
              <Route   path={"/move/:id"} exact component={MoveComponent}   /> 
              <Route   path={"/moves/:name"} exact component={SearchName}   /> 



              <Route   path={"*"} exact component={NotFound}   /> 
            </Switch>
        </BrowserRouter>
        </ThemContext.Provider>
    </div>
  );
}

export default App;
