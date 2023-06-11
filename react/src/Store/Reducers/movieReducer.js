const INITIAL_VALUE = {
    list: []
}

export default function movieReducer(state = INITIAL_VALUE, action){

    switch(action.type){
        case "GET_MOVIES_LIST": 
        return{
            ...state, // ES6
            list: action.payload
        }
        default: 
            return state
    }
}