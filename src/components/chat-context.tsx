"use client"
import { createContext, useRef } from "react";
import { useChat } from "ai/react";
import { usePathname, useRouter } from 'next/navigation'


interface DataItem {// type declaration of a single prompt or response object
    role: "function" | "user" | "assistant" | "data" | "system" | "tool";
    content: string;
    id: string;
    createdAt?: Date;
}



const initialData: DataItem[] = [        { // initial data required to create context. It is array of multiple objects
    "content": "where is pakistanPakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.",
    "role": "user",
    "createdAt": new Date("2024-03-01T10:55:11.594Z"),
    "id": "W9JwPv9"
},
{
    "id": "t9dXFxv",
    "createdAt": new Date("2024-03-01T10:45:17.296Z"),
    "content": "Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.",
    "role": "assistant"
},];

export const ChatContext = createContext({ //It is context where all chat is stored. It is initilized by initial Data
    messages: initialData,
    input: "",
    handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => {},
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => {},
});


export default function ChatContextProvider({children}: Readonly<{   //it is context provider component of higher order component that will provide chatContext to it's children. It wraps it's children in root layout
    children: React.ReactNode;
  }>) {
    
    const ref = useRef<string | undefined>("")

    const router = useRouter();

    const pathname = usePathname();

    
    let chatId = pathname === "/" ? "" : pathname.split('/').pop() || undefined;  // It will get chatId from url if it is availble


    


    const { messages, input, handleInputChange, handleSubmit } = useChat( // vercel ai sdk useChat api
        {
            id: chatId,
            api: `/api/chat/${ref.current?ref.current:chatId}`,
            onResponse(response) {
                chatId = response.headers.get('Chat-Id')||undefined
                ref.current = chatId;
            },
            onFinish() {
                if (pathname == "/" || pathname == "" && messages.length < 2) {
                    router.push(`/c/${ref.current}`);
                }
            }
        },
    );
    return (
        <ChatContext.Provider value={{ messages, input, handleInputChange, handleSubmit}}>
            {children}
        </ChatContext.Provider>
    );
}