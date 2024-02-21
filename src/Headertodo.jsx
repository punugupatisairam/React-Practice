import React from "react";
function Header(){
    return (<div className="headdiv">
            <h1 className="headname">My TodoList </h1>
            <div>
            <button className="countbutt">All &nbsp; <span className="countnum">{1}</span></button>
            <button className="countbutt">Pending  &nbsp;<span className="countnum">{2}</span></button>
            <button className="countbutt">Completed  &nbsp;<span className="countnum">{2}</span></button>
            </div>
        </div>)

}
export default Header