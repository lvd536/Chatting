import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { createContext } from "react";
import { getFirestore, type Firestore } from "firebase/firestore";

const app: FirebaseApp = initializeApp({
    apiKey: "AIzaSyCVe4DDkzRbhtSPyU-CNDo6YRrXcEf3pWY",
    authDomain: "test-6acdd.firebaseapp.com",
    projectId: "test-6acdd",
    storageBucket: "test-6acdd.firebasestorage.app",
    messagingSenderId: "58369436548",
    appId: "1:58369436548:web:3f2298342637c3b8214bd1",
    measurementId: "G-S9H5098XGJ",
});
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export const Context = createContext<{ auth: Auth; db: Firestore }>({
    auth,
    db,
});

createRoot(document.getElementById("root")!).render(
    <Context.Provider value={{ auth, db }}>
        <StrictMode>
            <App />
        </StrictMode>
    </Context.Provider>
);
