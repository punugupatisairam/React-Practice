const intialState = {
    count : 0
}
const counterReducder = function(state=intialState,action){
        if(action.type==='INCREMENT'){
            return {...state,count:state.count+1}
        }
        if(action.type==='DECREMENT'){
            return {...state,count:state.count-1}
        }
        if(action.type==='RESET'){
            return {...state,count:state.count=0}
        }

        return state
}
export default counterReducder