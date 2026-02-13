import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <nav id="navbar">
            <Link to="/" id="logo" className="nav-items">Swiggi Clone</Link>

            <div id="search-container" >
                <input className="nav-items" id="search" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                <button className="nav-items" id="btn">Search</button>
            </div>
            <ul id="nav-list" >
                <li className="nav-items"><Link to="/">Home</Link></li>
                <li className="nav-items"><Link to="/About">About</Link></li>
                <li className="nav-items"><Link to="/Contact">Contact-Us</Link></li>
                <li className="nav-items"><Link to="/Cart">Cart</Link></li>
            </ul>
        </nav>
    );
}