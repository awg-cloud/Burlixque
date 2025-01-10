import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Retrieve token from localStorage (if available)
  const [token, setToken] = useState(localStorage.getItem("tokens") || "");
  const [loading, setLoading] = useState(false);
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [error, setError] = useState('')

  const LoginAction = async () => {

    if (!email) {
      setErrEmail("Enter your email");
      return;
    }

    if (!password) {
      setErrPassword("Create a password");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", password);
      const response = await axios.post('https://burlixque.onrender.com/login', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure form-data is sent
          },
        });

      if (response.status === 200) {
        const accessToken = response.data["access token"]; // Correctly access token
        if (accessToken) {
          localStorage.setItem("tokens", accessToken);
          setToken(accessToken);
          toast.success("Login Successful");
          console.log("Saved Token:", accessToken);

          const isFirstLogin = localStorage.getItem("isFirstLogin");
          if (!isFirstLogin) {
            localStorage.setItem("isFirstLogin", "false");
            window.location.href = "/register/passenger"; // Redirect to first login page
          } else {
            window.location.href = "/new_dashboard"; // Redirect to dashboard
          }
          
          return true;
        } else {
          throw new Error("Access token not found in response");
        }
      }
    } catch (error) {

      if (error.response && error.response.status === 422) {
        const apiErrors = error.response.data.detail;
        apiErrors.forEach(err => toast.error(`${err.loc[1]}: ${err.msg}`)); // Show specific validation errors
      } else {
        setError("Network error. Please try again later.");
        toast.error("Network error. Please try again later.");
      }
      console.error("Network error:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };


  const logOut = () => {
    setEmail("");
    setToken("");
    localStorage.removeItem("tokens");  // Remove token from localStorage
    localStorage.removeItem("email");
  };

  return (
    <>
      <AuthContext.Provider value={{ LoginAction, logOut, token, email, error, loading, setPassword, setEmail, password, setLoading, errEmail, setErrEmail, errPassword, setErrPassword }}>
        {children}
      </AuthContext.Provider>
      <ToastContainer />
    </>
  )
}
