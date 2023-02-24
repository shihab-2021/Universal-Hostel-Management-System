import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from "firebase/auth";
import { useRouter } from "next/router";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const auth = getAuth();

  // Signup user with Email Password
  const createUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Create Account Successful!");
        setIsLoading(false);
        router.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        alert(error.message);
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Login user with Email Password
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login Successful!");
        setIsLoading(false);
        router.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        alert(error.message);
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user observation
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
        setIsLoading(false);
      } else {
        console.log("Please log in");
        setUser({});
        setIsLoading(false);
      }
    });
    return () => unsubscribed;
  }, [auth, !user.email]);

  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    fetch(`https://universal-hostel-api.onrender.com/users-data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, [user?.email]);

  // For Logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    isLoading,
    userInfo,
    authError,
    loginUser,
    logout,
    token,
    createUser,
  };
};

export default useFirebase;
