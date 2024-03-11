const intialState ={
    alltodos :[]
}
const todoReducer = function(state=intialState,action){
        if(action.type==='ADD'){
            return {...state,alltodos:[...state.alltodos,action.payload]}
        }
        if(action.type==='DELETE'){
            return {...state,alltodos:[...state.alltodos.filter((each,i)=>i!==action.payload)]}
        }
        if(action.type==='DONE'){
            return {...state,alltodos:[...state.alltodos.filter((each,i)=>i===action.payload)]}
        }
        return state
}
export default todoReducer 