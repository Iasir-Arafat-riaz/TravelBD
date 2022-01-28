import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import FirebaseInit from "../firebase/FirebaseInit/FirebaseInit";
FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = (navigate, location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state?.from || "/Dashboard");
        const user = result.user;

        saveUser(user.email, user.displayName, "PUT");
        setError("");
      })
      .catch((error) => {
        // Handle Errors here
        setError(error.message);
      });
  };

  const userRegistration = (
    email,
    password,
    displayName,
    navigate,
    location
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // const user = result.user;
        const newUser = { email, displayName };
        setUser(newUser);
        verifyEmail();
        saveUser(email, displayName, "POST");
        updateProfile(auth.currentUser, {
          displayName,
          email,
        })
          .then(() => {
            // Profile updated!
            setSuccess("Your Profile Create Successfully");
            setError("");

            const destination = location?.state?.from || "/";
            navigate(destination);
            // ...
          })
          .catch((error) => {
            // An error occurred
            setError(error.message);
            // ...
          });
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
        // ..
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  //Sign in with username and password
  const signInUser = (email, password, navigate, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        setUser(result.user);
        setError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setError("");
        setSuccess("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://frozen-falls-34021.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // get web admin
  console.log(user?.email);
  useEffect(() => {
    fetch(`https://frozen-falls-34021.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user?.email]);

  console.log(admin);

  console.log(user);
  return {
    user,
    googleSignIn,
    logOut,
    userRegistration,
    signInUser,
    error,
    isLoading,
    success,
    admin
  };
};

export default useFirebase;
