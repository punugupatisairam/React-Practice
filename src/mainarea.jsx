import React from "react";
import Counter from "./Counter";
import Todolist from "./Todolist";
function Mainarea(){
    return <div className="border border-success border-2 p-5 text-center text-danger m-2 rounded">
        <h1>This is Main Body Section</h1>
        <Counter/>
        <Todolist/>
    </div>
}
export default Mainarea 