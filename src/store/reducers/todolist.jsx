const intialState =
    {
    todos : [
       
    ],
    
}

const todoReducer= function(state=intialState,action){
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,{title:action.payload,status:false}]}
    }
    if(action.type==='DELETE'){
        return {...state,todos:[...state.todos.filter((each)=> { return each.title!==action.payload.title})]}
        
    }
    if(action.type==='DONE'){
        let temp ={...state.todos}
        temp[action.payload].status=true
        return {...state,todos:[...temp]}
    }
    return state
}
export default todoReducer