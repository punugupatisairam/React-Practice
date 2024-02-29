const intialState = {
    alltodos :[
        {

        }
    ]
    
}
 const todoReducer = function(state=intialState,action){
    if(action.type==='ADDTODO'){
        return {...state,alltodos:[...state.alltodos,{title:action.paylod,status:false}]}
    }
    if(action.type==='DELETE'){
        return  {...state,alltodos:[...state.alltodos.filter((t,i)=>i!==action.payload)]}
    }
    if(action.type==='DONE'){
        return {...state,alltodos:[...state.alltodos.map((t,i)=>i===action.payload)]}
    }
    return state 
 }
 export default todoReducer 