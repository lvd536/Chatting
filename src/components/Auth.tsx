import { useContext } from "react";
import { Context } from "../main";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Auth() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    if (user) return <Navigate to="/" />;
    const handleAuth = async () => {
        const user = await signInWithPopup(auth, new GoogleAuthProvider());
        console.log(user);
    };
    return (
        <div
            className="flex items-center justify-center m-auto rounded-sm w-60 h-10 bg-indigo-500 p-2 hover:bg-indigo-400 transition-bg duration-300"
            onClick={handleAuth}
        >
            Auth with google
        </div>
    );
}
