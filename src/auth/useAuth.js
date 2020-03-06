import { useState, useEffect, useContext } from "react";
import apiHandler from "../api/apiHandler";
import UserContext from "./UserContext";

const api = new apiHandler();

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;

  useEffect(() => {
    api.get("/is-loggedin")
      .then(res => {
        console.log(res);
        
        setIsLoggedIn(true);
        setIsLoading(false);
        setCurrentUser(res.data.currentUser);
      })
      .catch(() => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  }, [setCurrentUser]);

  return { isLoggedIn, isLoading, currentUser };
};