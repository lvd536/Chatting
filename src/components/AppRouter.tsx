import { Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Auth from "./Auth";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
    return (
        <Routes>
            <Route path={"/auth"} element={<Auth />} />
            <Route element={<ProtectedRoute />}>
                <Route path={"/"} element={<Chat />} />
            </Route>
        </Routes>
    );
}
