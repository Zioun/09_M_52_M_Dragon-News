import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    //create user
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login user
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //logout user
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }
    //activity
    useState(() =>{
        const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
            console.log('active', currentUser)
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unSubscrive();
        } 
        
    },[])
    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;