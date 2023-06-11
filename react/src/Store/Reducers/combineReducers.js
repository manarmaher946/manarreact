import {combineReducers} from "redux";
import favoriteReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";
import languageReducer from "./langReducer";

export default combineReducers({
    addRed: favoriteReducer,
    movieRed:movieReducer,   
    langRed: languageReducer,

})


// more reducers --> file --> switch 