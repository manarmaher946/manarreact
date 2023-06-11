const INITIAL_VALUE = {
    lang: "EN"
}

export default function languageReducer(state = INITIAL_VALUE, action){

    switch(action.type){
        case "CHANGE_LANG": 
        return{
            ...state, // ES6
            lang: action.payload
        }
        default: 
            return state
    }
}