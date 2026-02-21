import { Navbar } from "./src/components/Navbar";
import { Footer } from "./src/components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";
import { useEffect, useState } from "react";
import HotelListContext from "./src/utils/HotelListContext";

export const AppLayout = () => {
  const [hotelList, setHotelList] = useState([]);
  const [filteredHotelList, setFilteredHotelList] = useState([]);

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  //authentication
  useEffect(() => {
    const randomTrue = Math.random() < 0.3;
    if (!randomTrue) {
      setUsername("guest");
      setEmail("guestEmail.com");
      return;
    }
    const loggedInUser = {
      name: "SHAIK BABA",
      email: "baba@gmail.com",
    };
    setUsername(loggedInUser.name);
    setEmail(loggedInUser.email);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ name: username, email: email }}>
        <HotelListContext.Provider
          value={{
            hotelList,
            setHotelList,
            filteredHotelList,
            setFilteredHotelList,
          }}
        >
          <Navbar />
          <Outlet />
          <Footer />
        </HotelListContext.Provider>
      </UserContext.Provider>
    </div>
  );
};