import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../main";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProtectedRoute() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    if (!user) return <Navigate to="auth" />;
    return <Outlet />;
}
