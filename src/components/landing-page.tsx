
export default function LandingPage() {
    return (

        <>
            <div className="flex flex-col min-h-[100dvh] bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
                    <a className="flex items-center" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <path d="M12 8V4H8" />
                            <rect width={16} height={12} x={4} y={8} rx={2} />
                            <path d="M2 14h2" />
                            <path d="M20 14h2" />
                            <path d="M15 13v2" />
                            <path d="M9 13v2" />
                        </svg>
                        <span className="ml-2 text-lg font-medium">V0GPT</span>
                    </a>
                    <a href="/api/auth/signin">
                    <button className="flex items-center justify-center rounded-md bg-[#f0e6ff] px-4 py-2 text-sm font-medium text-[#4b2e83] shadow transition-colors hover:bg-[#f0e6ff]/90 focus:outline-none focus:ring-1 focus:ring-[#f0e6ff] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#4b2e83] dark:text-[#f0e6ff] dark:hover:bg-[#4b2e83]/90 dark:focus:ring-[#4b2e83]">
                        Log In
                    </button></a>
                </header>
                <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 ">
                    <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4 my-12 md:my-24 lg:my-32">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Unlock the Power of AI with V0GPT
                            </h1>
                            <p className="text-gray-500 md:text-xl">
                                V0GPT is a powerful AI assistant that can help you with a wide range
                                of tasks, from research and analysis to creative writing and
                                problem-solving.
                            </p>
                        </div>
                        <div className="max-md:hidden box-border w-ful h-full bg-contain bg-no-repeat bg-center space-y-4 bg-[url('/aihand.png')] my-12 md:my-24 lg:my-32">
                        </div>
                    </div>
                </main>
                <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
                    <div className="mx-[auto] container px-4 md:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-blue-500"
                                >
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                </svg>
                                <h3 className="text-2xl font-bold">Ideation</h3>
                                <p className="text-gray-500">
                                    Unleash your creativity with V0GPT&apos;s ideation capabilities.
                                    Generate innovative ideas, brainstorm solutions, and explore new
                                    possibilities.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-blue-500"
                                >
                                    <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                </svg>
                                <h3 className="text-2xl font-bold">Research</h3>
                                <p className="text-gray-500">
                                    Leverage V0GPT&apos;s vast knowledge base to conduct thorough research,
                                    gather insights, and uncover valuable information to s
                                </p>
                            </div>
                            <div className="space-y-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-blue-500"
                                >
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                                <h3 className="text-2xl font-bold">Development</h3>
                                <p className="text-gray-500">
                                    Accelerate your development process with V0GPT&apos;s coding
                                    capabilities. Generate code, debug issues, and optimize
                                    performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container mx-[auto] px-4 md:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="max-md:hidden w-ful h-[-webkit-fill-available] bg-contain bg-no-repeat bg-center space-y-4 bg-[url('/brain1.webp')] my-12 md:my-24 lg:my-32">
                        </div>
                            <div className="space-y-4 py-12 md:py-24 lg:py-32">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                    Unleash Your Potential with V0GPT
                                </h2>
                                <p className="text-gray-500 md:text-xl">
                                    V0GPT is designed to be your trusted AI companion
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-gray-100 dark:bg-gray-800 py-6 md:py-8 lg:py-10">
                    <div className="container px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center" />
                    </div>
                </footer>
            </div>
        </>

    )
}
