import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import SharedDataContext from "./Contexts/SharedDataProvider";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});

  const login = useCallback((userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    if (localStorageData && localStorageData.token) {
      axios
        .get(`http://localhost:5000/api-v1/user/profile`, {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        })
        .then((res) => {
          setIsLoggedIn(true);
          setUserInfos(res.data.data);
          setToken(localStorageData.token);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, []);

  return (
    <SharedDataContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      <RouterProvider router={routes} />
    </SharedDataContext.Provider>
  );
}

export default App;
