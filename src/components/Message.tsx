import type { IMessage } from "./Chat";

interface Props {
    message: IMessage;
    isUser: boolean;
}

export default function Message({ message, isUser }: Props) {
    return (
        <div
            className={isUser ? "flex justify-end gap-2 p-2" : "flex gap-2 p-2"}
        >
            <img
                src={message.photoUrl}
                alt=""
                className="w-10 h-10 rounded-full"
            />
            <div
                className={`flex flex-col gap-1 ${
                    isUser ? "bg-sky-500/40" : "bg-white/40"
                } p-2 rounded-sm`}
            >
                <p className={isUser ? "text-indigo-400" : "text-amber-400"}>
                    {isUser ? "You" : message.name}
                </p>
                <p>{message.text}</p>
                <p className="text-white/50 text-xs">
                    {message.createdAt.toDate().toDateString()}
                </p>
            </div>
        </div>
    );
}
