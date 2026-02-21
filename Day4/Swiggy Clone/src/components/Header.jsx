import { HEADER_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import HotelListContext from "../utils/HotelListContext";


const Header = () => {
  const isOnline = useOnlineStatus();
  const [input, setInput] = useState("");
  const {name} = useContext(UserContext);
  const {hotelList, setHotelList, filteredHotelList, setFilteredHotelList} = useContext(HotelListContext);
  

  return (
    <div className="header">
      <div className="logo-container">
        <img className="header-logo" src={HEADER_LOGO} />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants, cuisines..."
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
            const filteredList = hotelList.filter((hotel) =>
              hotel.info.name.toLowerCase().includes(e.target.value.toLowerCase()),
            );
            setFilteredHotelList(filteredList);
          }}
        />
      </div>
      <div className="nav-items">
        <ul>
          {isOnline ? (
            <li style={{ color: "green" }}>🟢 Online</li>
          ) : (
            <li style={{ color: "red" }}>🔴 Offline</li>
          )}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>{name}</li>
          <li>{filteredHotelList.length}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;