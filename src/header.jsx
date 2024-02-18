import React from "react";
function Header(){
    var [c,setC]=React.useState(0)
    return <div className="mdiv" >
        <h1>Your Todo List</h1>
            <ul className='nav'>
                <button className="navlist">All Todo's <span className="count">{c}</span> </button>
                <button className="navlist">Completed <span className="count">{c}</span> </button>
                <button className="navlist">Pending <span className="count">{c}</span> </button>
            </ul>
           </div>
}
export default Header 