import { useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../main";
import {
    query,
    collection,
    orderBy,
    Query,
    addDoc,
    serverTimestamp,
    Timestamp
} from "firebase/firestore";

export interface IMessage {
    createdAt: Timestamp;
    name: string;
    text: string;
    uid: number;
    photoUrl: string;
}

export default function Chat() {
    const { auth, db } = useContext(Context);
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState<string>();
    const messageCollectionRef = collection(db, "messages");
    const messagesQuery = query(
        messageCollectionRef,
        orderBy("createdAt")
    ) as Query<IMessage>;
    const [messages, loading] = useCollectionData(messagesQuery);
    const sendMessage = async () => {
        await addDoc(messageCollectionRef, {
            createdAt: serverTimestamp(),
            name: user?.displayName,
            text: message,
            uid: user?.uid,
            photoUrl: user?.photoURL,
        }).then(() => setMessage(""));
    };
    return (
        <>
            <div className="w-full h-70 ring-1 ring-indigo-500 rounded-sm overflow-y-auto">
                {messages && !loading ? (
                    messages.map((message, index) => (
                        <Message
                            isUser={
                                user?.uid
                                    ? user.uid === message.uid.toString()
                                    : false
                            }
                            message={message}
                            key={index}
                        />
                    ))
                ) : (
                    <div className="flex items-center gap-2 m-2">
                        <p>Loading messages</p>
                        <span className="loader"></span>
                    </div>
                )}
            </div>
            <div className="flex items-center justify-between gap-2">
                <textarea
                    name="messageInput"
                    id="messageInput"
                    rows={1}
                    className="ring-1 ring-indigo-500 rounded-sm p-2 w-11/12 min-h-10"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button
                    type="button"
                    className="ring-1 ring-indigo-500 rounded-sm p-2 min-h-10"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </>
    );
}
