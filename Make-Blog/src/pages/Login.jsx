/* eslint-disable react/prop-types */
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import "./Login.css";

export default function Login({ isAuth, setisAuth }) {
  const navigate = useNavigate();
  async function signInWithGoogle() {
    try {
      const userAuth = await signInWithPopup(auth, googleProvider);
      if (userAuth) {
        setisAuth(true);
        navigate("/create");
      }
    } catch (error) {
      console.error("Error is ", error);
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
      setisAuth(false);
    } catch (error) {
      console.error("Error is ", error);
    }
  }

  return (
    <>
      <div className="login-container">
        {isAuth ? <h1>Logout Page</h1> : <h1>Login Page</h1>}
        {isAuth ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={signInWithGoogle}>
            <img src={google} />
            Continue with Google
          </button>
        )}
      </div>
    </>
  );
}
