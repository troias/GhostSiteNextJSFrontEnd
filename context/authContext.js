import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";


export const AuthContext = createContext();

export const AuthProvider = (props) => {

  const router = useRouter();
  
  const [user, setUser] = useState();
  const [success] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  console.log("userLogin", user)

  const logOutUser = () => {

    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false)
    router.push("/");

  };

  const registerUser = async (email, password) => {

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           email,
          password,
        },
        ),
      });
      const data = await response.json();
      console.log("registerUserData", data);
      
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data));

        setUser(data);
        setLoggedIn(true);
        console.log("login", data)
        return data;
      }




      if (data.error.message) {
        setError(data.error.message);
        console.log("returned", data.error.message);
        return data.error;
      }


    } catch (error) {
      setError("error" + error)
    }

  };

  const loginUser = async (email, password) => {
    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        },
        ),
      });
      const data = await response.json();

      console.log("Logindata", data)

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data));

        setUser(data);
        setLoggedIn(true);
        console.log("login", data)
        return data;
      }




      if (data.error.message) {
        setError(data.error.message);
        console.log("returned", data.error.message);
        return data.error;
      }
      // console.log("login", data)






    } catch (error) {
      console.log("error", error);
      setError("something went wrong" + error);
      return error
    }

  };

  const checkIsLoggedIn = () => {
    if (isLoggedIn) {
      return true;
    }
    if (!isLoggedIn) {
      return false;
    }
  };

  useEffect(() => {
    checkIsLoggedIn()
    return () => {
    }

  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        setError,
        success,
        error,
        loginUser,
        logOutUser,
        checkIsLoggedIn,
        registerUser,

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
