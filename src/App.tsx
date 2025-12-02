import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="container h-screen mx-auto flex flex-col gap-5">
                <NavBar />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
