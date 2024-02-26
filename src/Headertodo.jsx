import React from "react";
function Header({ar}){
    return (<div className="headdiv">
            <h1 className="headname">My TodoList </h1>
            <div>
            <button className="countbutt">All &nbsp; <span className="countnum">{(ar.length)}</span></button>
            <button className="countbutt">Pending  &nbsp;<span className="countnum">{(ar.length)}</span></button>
            <button className="countbutt">Completed  &nbsp;<span className="countnum">{ar.length}</span></button> 
            </div>
        </div>)

}
export default Header