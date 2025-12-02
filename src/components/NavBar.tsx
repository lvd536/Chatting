import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../main";

export default function NavBar() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    const handleSignOut = async () => {
        await auth.signOut();
    };
    return (
        <>
            {user && (
                <div className="flex w-11/12 h-10 p-1 items-center justify-between mx-auto mt-2 bg-indigo-500/50 rounded-xl">
                    <div className="flex items-center p-2 gap-2">
                        <img
                            src={user.photoURL || ""}
                            alt=""
                            className="h-8 rounded-full"
                        />
                        <p>{user.displayName}</p>
                    </div>
                    <div
                        className="flex items-center justify-center rounded-xl w-60 h-8 bg-indigo-500 p-2 hover:bg-indigo-400 transition-bg duration-300"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </div>
                </div>
            )}
        </>
    );
}
