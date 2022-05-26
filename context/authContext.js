import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";


export const AuthContext = createContext();

export const AuthProvider = (props) => {

  const router = useRouter();
  
  const [user, setUser] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [isLostPassword, setIsLostPassword] = useState(false);
 

  // console.log("userLogin", user)

  const toggleRegister = (e) => {
      
    setRegistering(!registering);
    setLoggingIn(false);
    isLostPassword && setIsLostPassword(false);
};




  const logOutUser = () => {

    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false)
    router.push("/");

  };

  const registerUser = async (username, email, password) => {

    // console.log("registerUserData", username, email, password);
   
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
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
        setLoading(false);
        setSuccess(true);
        setModalOpen(false);
      
        // console.log("login", data)
        return data;
      }




      if (data.error.message) {
        setError(data.error.message);

        const timeout = setTimeout(() => {
          setError(data.error.message);
          setSuccess(false);
          setLoading(false);
          setError(null);
          clearTimeout(timeout);
        }, 3000);
       
       console.log("registerError", data.error.message);
        return data.error;
      }

      


    } catch (error) {
      const timeout = setTimeout(() => {
        setLoading(false);
        setSuccess(false);
        setError("error" + error)
        clearTimeout(timeout);
      }, 3000);

      
    }

  };

  const loginUser = async (identifier, password) => {

    // console.log("logindatacheck", identifier, password);
    try {
      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        },
        ),
      });
      const data = await response.json();

      // console.log("Logindata", data)

      if (data.user) {

        localStorage.setItem("user", JSON.stringify(data));

        setSuccess(true);
        const timeout = setTimeout(() => {

        setLoading(false);
        setUser(data);
        setLoggedIn(true);
       
        setModalOpen(false);

        clearTimeout(timeout);
        }, 1500);

        // console.log("login", data)
        return data;
      }




      if (data.error.message) {
        

       
        const timeout = setTimeout(() => {
          setLoading(false);
          setError(data.error.message);
          setSuccess(false);
          clearTimeout(timeout);
        }, 1500);

       
        // console.log("returned", data.error.message);
        return data.error;
      }
      // console.log("login", data)

      setLoading(false);




    } catch (error) {
      // console.log("error", error);
      setError("something went wrong" + error);
      const timeout = setTimeout(() => {
        setLoading(false);
       
        clearTimeout(timeout);
      }, 1500);

     
      return error
    }

  };

  const lostPassword = async (email) => {
    //  console.log("lostPassord", email);
   
    try {
      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        
        },
        ),
      });
      
      const data = await response.json();

      if (data.error) {
      
        setError(data.error.message);
        const timeout = setTimeout(() => {

        setLoading(false);
        clearTimeout(timeout);
        }, 1500);

          // console.log("lostPasswordInnerDataError", data.error);
        return data.error;
      }

      

      // console.log("login", data)
   

      setIsLostPassword(false)
      setSuccess(true);
      setModalOpen(false);
      
      const timeout = setTimeout(() => {
        setLoading(false);
        clearTimeout(timeout)
      
      }, 1500);
      // console.log("lostPassData", data);

      return data;


    } catch (error) {
      // console.log("error", error);
      const timeout = setTimeout(() => {
        setLoading(false);
        clearTimeout(timeout)
      }, 1500);

      setError("something went wrong" + error);
      // console.log("lostPassData", error);

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



  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setError,
        success,
        error,
        loginUser,
        logOutUser,
        checkIsLoggedIn,
        registerUser,
        setModalOpen,
        isLoading,
        modalOpen,
        registering,
        setRegistering,
        toggleRegister, 
        setIsLostPassword,
        isLostPassword,
        lostPassword
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
