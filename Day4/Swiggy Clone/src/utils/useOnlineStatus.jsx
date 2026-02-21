import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  // check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("we found you offline");
      setIsOnline(false);
    });

    window.addEventListener("online", () => {
      console.log("we found you online");
      setIsOnline(true);
    });
  });

  // return boolean value
  return isOnline;
};

export default useOnlineStatus;