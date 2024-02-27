import { func } from "prop-types"

const intialState = {
    count :0
}
const counterReducer = function(state=intialState,action){
    if(action.type==='INCREMENT'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DECREMENT'){
        return {...state,count:state.count-1}
    }
    return state
}
export default counterReducer