import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   useEffect(() => {
  //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //     });
  //     return () => {
  //       unSubscribe();
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       console.log(currentUser, "ke ache user");
  //       setUser(currentUser);
  //     });
  //     return () => {
  //       unSubscribe();
  //     };
  //   }, []);
  const authInfo = {
    loading,
    logInUser,
    logOut,
    createUser,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// import { createContext } from "react";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config";
// import { useState } from "react";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

// const userLogin =(email, password)=>{
//     return signInWithEmailAndPassword(auth, email, password)
// }

//   const [user, setuser] = useState(null);

//   const createUser =(email, password)=>{
//     return createUserWithEmailAndPassword( auth, email, password)
//   }

//   const authInfo = {
//     user,
//     createUser,
//   };
//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// import { createContext, useState } from "react";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config";

// const AuthContext =createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({children}) => {

//     const [user, setUser]=useState(null)

//     const authInfo ={user}

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// import { createContext } from "react";

// import { createContext } from "react";

// const AuthContext = createContext(null)

// const AuthProvider = ({children}) => {
//     return (
//         <AuthContext.Provider>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// const AuthContext = createContext(null)

// const AuthProvider = ({children}) => {
//     return (
//         <AuthContext.Provider>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
