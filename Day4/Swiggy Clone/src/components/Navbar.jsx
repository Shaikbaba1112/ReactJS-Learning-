export function Navbar(){
    return (<nav id="navbar">
        <a  href="/" id="logo" className="nav-items">Swiggi Clone</a>
        
            <div id="search-container" >
                <input className="nav-items" id="search" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                <button className="nav-items" id="btn">Search</button>
            </div>
            <ul id="nav-list" >          
                <li className="nav-items">Home</li>
                <li className="nav-items">About</li>
                <li className="nav-items">Contact-Us</li>
                <li className="nav-items">Cart</li>
            </ul>
    </nav>);
}