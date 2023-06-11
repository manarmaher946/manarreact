const INITIAL_VALUE = {
    favorites:[],
    count:0
}

export default function favoriteReducer(state = INITIAL_VALUE, action){

    switch(action.type){
        case "ADD_MOVIE": 
        return{
            ...state, 
            favorites:[...state.favorites, action.payload],
            count:state.count+1
        };
        case "REMOVE_MOVIE":
            return{
                ...state,
                favorites:state.favorites.filter((movie) => movie.id !== action.payload),
                count:state.count-1
            }
        default: 
            return state
    }
}