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

  const handaleGoogleSign = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        navigate(location?.state?.from || "/");
        // navigate("/Dashboard");
        console.log(location?.state?.from);
        const user = result.user;

        saveUser(user.email, user.displayName, "PUT");

        setSuccess("Your login successfully");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");;
      })
      .finally(() => setIsLoading(false));

  }

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

            const destination = "/";
            navigate(location?.state?.from || destination);
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
      //console.log(result);
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
        //console.log(destination)
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
  }, [auth,admin]);

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
  //console.log(user?.email);
  useEffect(() => {
    fetch(`https://frozen-falls-34021.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  //console.log(admin);

  //console.log(user);
  return {
    user,
    handaleGoogleSign,
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
