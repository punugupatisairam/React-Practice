const intialState =
    {
    todos : [
       
    ],
    filteredTodos:[] 
}

const todoReducer= function(state=intialState,action){
    state.filteredTodos=[...state.todos]
    if(action.type==='ADDTODO'){
        var todos = [...state.todos,{title:action.payload,status:false}]
        return {...state,todos,filteredTodos:[...todos]}
    }
    if(action.type==='DELETE'){
        return {...state,todos:[...state.todos.filter((each,i)=> i!==action.payload)]}   
    }
    // if(action.type==='DONE'){
    //     let temp ={...state.todos}
    //     temp[action.payload].status=true
    //     return {...state,todos:[...temp]}
    // }
    if(action.type==='ALL'){
        return {...state,filteredTodos:[...state.todos]}
    }
    if(action.type==='DONE'){
        return {...state,filteredTodos:[...state.todos.filter(todo=>todo.status)]} 
    }
    if(action.type==='NOTDONE'){
        return {...state,filteredTodos:[...state.todos.filter(todo=>!todo.status)]}
    }
    return state
}
export default todoReducer