'use client'
import PromptMessage from "@/components/prompt-message"
import { ChatContext } from "@/components/chat-context"
import { useContext } from "react";
import { useSession } from "next-auth/react"

export default function Home() {
  const { messages } = useContext(ChatContext)
  const session = useSession()
  const image = session?.data?.user?.image;

  if (messages.length === 0) {
    return (
      <main className="h-full" >
        <div className="flex h-full w-full flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center">
          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={40}
                            height={40}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth={3}
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
            <h1 className="ml-2 text-3xl font-bold text-[#fff]">V0 GPT</h1>
          </div>
          <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 shadow-md transition-transform hover:scale-105 rounded-md text-slate-800 dark:text-slate-200">
              <h3 className="text-md font-md">
                Explain nostalgia to a kinder
              </h3>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 shadow-md transition-transform hover:scale-105 rounded-md text-slate-800 dark:text-slate-200">
              <h3 className="text-md font-md">
                What to do with kids&apos; art
              </h3>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 shadow-md transition-transform hover:scale-105 rounded-md text-slate-800 dark:text-slate-200">
              <h3 className="text-md font-md">
                Email for plumber quote
              </h3>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 shadow-md transition-transform hover:scale-105 rounded-md text-slate-800 dark:text-slate-200">
              <h3 className="text-md font-md">
                Make me a personal webpage.
              </h3>
            </div>
          </div>
        </div>

      </main>
    );
  }
  else {
    return (
      <main className="overflow-y-scroll" >
        <div id="scroll-0" className=" md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto">
          <PromptMessage userImage={image}/>
        </div>
      </main>
    );
  }
}