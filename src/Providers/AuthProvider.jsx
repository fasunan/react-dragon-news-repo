import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
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
