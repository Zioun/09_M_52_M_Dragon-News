import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //logout user
    const logOut = () => {
        return signOut(auth);
    }
    //activity
    useState(() =>{
        const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
            console.log('active', currentUser)
            setUser(currentUser);
        });
        return () => {
            unSubscrive();
        } 
        
    },[])
    const authInfo = {
        user,
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