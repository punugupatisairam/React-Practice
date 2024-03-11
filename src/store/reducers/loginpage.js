import { errorMonitor } from "events"

const intialState = {
    userdata :[]
}
const loginpageReducer = function(state=intialState,action){
        if(action.type==='ADDED'){
            return {...state,userdata:[...state.userdata,action.payload]}
        }
        return state
}
export default loginpageReducer