'use client'
import Link from 'next/link'
import {useState, useEffect, useContext} from 'react'
import { usePathname, useRouter } from 'next/navigation';



type Chat = {
    id: string;
    chat_title: string;
    createdAt: Date;
};

type SidePanelProps = {
    session: any;
    prechats: any[];
};

export default function SidePanel({session, prechats}: SidePanelProps) {

    const [chats, setChats] = useState<any[]>(prechats);
    const [settings, setSettings] = useState(false);
    const [signOut, setSignOut] = useState(false);
    const pathname = usePathname()
    const chatId = pathname.split('/').pop()
    const router = useRouter()
    const [aside, setAside] = useState(false);




    function formatDateToReadableString(date: Date): string {
        // Use Intl.DateTimeFormat to format the date
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
    
        // Format the date
        return formatter.format(date);
    }

    function handleClick() {
        setAside(!aside);
    }

    return (
        <aside className="">
            <div className="fixed top-4 right-4 z-50 md:hidden">
                <button onClick={handleClick} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>
            </div>
            <div
                className={`${aside? "":"max-md:hidden" } flex h-svh w-60 flex-col bg-slate-50 pt-8 dark:border-slate-700 dark:bg-slate-900 sm:w-64`}
            >
                <div className="flex px-4">
                    {/* Logo */}
                    <div className="mb-8 flex items-center">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=""
                        >
                            <path d="M12 8V4H8" />
                            <rect width={16} height={12} x={4} y={8} rx={2} />
                            <path d="M2 14h2" />
                            <path d="M20 14h2" />
                            <path d="M15 13v2" />
                            <path d="M9 13v2" />
                        </svg>
    <h1 className="ml-2 text-xl font-bold text-[#fff]">V0 GPT</h1>
  </div>
                    <h2 className="px-5 text-lg font-medium text-slate-800 dark:text-slate-200">
                        <span
                            className="mx-2 rounded-full bg-blue-600 px-2 py-1 text-xs text-slate-200"
                        >{chats?.length}</span>
                    </h2>
                </div>
                <div className="mx-2 mt-8">
                    <a href="/">
                    <button
                        className="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                        New Chat
                    </button>
                    </a>
                </div>
                {/* Previous chats container */}
                <div
                    className="h-1/2 space-y-4 overflow-y-auto border-b border-slate-300 px-2 py-4 dark:border-slate-700"
                >
                    {chats? chats.map((chat) => (
                        <Link href={`/c/${chat.id}`}
                            key={chat.id}
                        >
                            <button
                                className={`"flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 ${chat.id==chatId? "bg-slate-200  dark:bg-slate-800" : ""} focus:outline-none dark:hover:bg-slate-800`}
                            >
                                <h1
                                    className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                                >
                                    {chat.chat_title}
                                </h1>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{formatDateToReadableString(chat.createdAt.Stringify)}</p>
                            </button>
                        </Link>
                    )) : <div>No chats available</div>}

                </div>

                <div className="relative mt-auto w-full space-y-4 px-2 py-4"
                    onMouseLeave={(e) => { e.stopPropagation(); setTimeout(()=>{setSettings(false); setSignOut(false);},200); }}
                >
                    <button onMouseEnter={(e) => { e.stopPropagation(); setSignOut(true)}}
                        className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <img className='h-6 w-6 rounded-full' src={session.user.image}/>
                        {session.user.name}
                    </button>
                    <button onMouseEnter={(e) => { e.stopPropagation(); setSettings(true)}}
                        className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                            ></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        </svg>
                        Settings
                    </button>

                    {signOut && (
                        <a href="/api/auth/signout"
                         className="absolute z-50 top-[-50px] flex w-[90%] gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors duration-200 bg-slate-200 focus:outline-none dark:bg-slate-800"
                        >
                            Sign Out
                        </a>
                    )}
                    {settings && (
                        <button onClick={(e) => {
                           
                            fetch("/api/chats", {
                                method: "DELETE",
                            })
                                .then(response => {console.log(response);if(response.status === 200) {setChats([]); alert("All chats deleted"); router.push('/')} else {alert("Failed to delete chats")}})
                                .catch(error => {
                                    console.error("Error deleting chats:", error);
                                });}}
                         className="absolute z-50 top-0 flex w-[90%] gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-red-500 transition-colors duration-200 bg-slate-200 focus:outline-none dark:bg-slate-800"
                        >
                            Delete all chats
                        </button>
                    )}


                </div>
            </div>
        </aside>
    )
}