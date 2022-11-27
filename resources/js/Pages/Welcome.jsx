import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-900 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-500 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-500 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-500 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <svg
                            viewBox="0 0 132.29 34.4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-auto text-gray-700 sm:h-20"
                        >
                            <g clipPath="url(#clip0)" fill="#EF3B2D">
                                <path xmlns="http://www.w3.org/2000/svg" d="M56.77 27.23c-.81 0-1.16-1.09-1.16-4.07 0-1.55.75-1.94 2.9-1.94l1.45.01c-.68 2.11-1.6 6-3.19 6m-4.36-2.04c0 .8.08 1.47.21 2.04H41.25c-1.51 0-2.48-.35-2.48-1.75v-3.87h3.58a12 12 0 0 0 .59-2.52h-4.17c.02-1.2.1-2.26.2-3.49a7.57 7.57 0 0 0-3.3 2.02v1.47h-1.84c-.15 1.05-.15 1.84-.2 2.52h2.04v4.07c0 2.84 1.73 4.07 4.09 4.07h15.46c1.9 0 3.35-1.56 4.75-5.07v5.07h3.1V19.09a46.4 46.4 0 0 0-4.07-.2c-3.84 0-6.59 1.6-6.59 6.3m16.28-1.18v-1.05c0-1.35-.1-2.51-.3-3.87h-3c.1 1.36.2 2.52.2 3.87v6.79h3.1c0-3.8 1.22-8.12 4.45-7.66 0-.68-.1-2.23-.29-3.2-2.36.21-3.52 2.3-4.16 5.12m-42.7 3.22c-.82 0-1.17-1.09-1.17-4.07 0-1.55.76-1.94 2.9-1.94l1.46.01c-.7 2.11-1.61 6-3.2 6m-4.36-2.04c0 3.22 1.17 4.75 2.72 4.75 1.9 0 3.41-1.68 4.84-5.27v5.08h3.1V19.09a46.2 46.2 0 0 0-4.07-.2c-3.84 0-6.59 1.6-6.59 6.3m101.03-4.94c0-2.65-1.84-4.26-5.13-4.26-1.83 0-3.16.39-3.98.78a7.34 7.34 0 0 0-.97 2.6c1.24-.48 2.45-.86 4.27-.86 1.45 0 2.61.62 2.61 2.32 0 1.84-1.14 3.18-7.36 6.78 0 .4.02 1.17.2 2.14h10.26c.3-.88.49-1.65.58-2.52h-8.74c4.37-1.5 8.26-3.05 8.26-6.98M14.32 26.77l-.16-.09c-1.86-.98-4.36-2.5-4.36-5.25 0-2.52 1.63-3.7 3.59-3.7 2.17 0 3.49 1.53 3.49 4.2 0 1.85-1.02 3.48-2.56 4.84m5.95 3.17-5.1-2.72c2.88-1.05 5-3.12 5-6.06 0-3.95-2.97-5.95-6.78-5.95-3.5 0-6.88 2.25-6.88 6.6 0 3.65 2.79 5.84 5.85 7.45l9.84 5.14c0-2.27-.27-3.57-1.93-4.46m72.54-1.16c-.87 0-3.58-1.77-3.58-6.5 0-2.32 1.35-3.77 3.58-3.77s3.59 1.45 3.59 3.78c0 4.72-2.72 6.49-3.59 6.49m0-12.8c-3.87 0-6.78 2.33-6.78 6.11 0 4.94 4.75 7.85 6.78 7.85 2.04 0 6.78-2.9 6.78-7.85 0-3.78-2.9-6.1-6.78-6.1m.04 5.28a8.7 8.7 0 0 0-1.77 1.7c.51.64 1.1 1.2 1.77 1.69a8.87 8.87 0 0 0 1.78-1.7 8.81 8.81 0 0 0-1.78-1.69m17.79-1.02c0-2.65-1.84-4.26-5.14-4.26a9.3 9.3 0 0 0-3.97.78 7.36 7.36 0 0 0-.97 2.6 10.8 10.8 0 0 1 4.26-.86c1.46 0 2.62.62 2.62 2.32 0 1.84-1.14 3.18-7.36 6.78 0 .4.02 1.17.2 2.14h10.26c.3-.88.49-1.65.58-2.52h-8.74c4.37-1.5 8.26-3.05 8.26-6.98m-26.16 0c0-2.65-1.84-4.26-5.13-4.26-1.83 0-3.16.39-3.98.78a7.28 7.28 0 0 0-.97 2.6c1.24-.48 2.45-.86 4.27-.86 1.45 0 2.61.62 2.61 2.32 0 1.84-1.14 3.18-7.36 6.78 0 .4.02 1.17.2 2.14h10.26c.3-.88.49-1.65.58-2.52h-8.74c4.37-1.5 8.26-3.05 8.26-6.98m26.44-8.83a10.9 10.9 0 0 1-5.74.15 6.18 6.18 0 0 1-2.12-1 5.29 5.29 0 0 1-2.15-4.58c0-1 .17-1.87.5-2.62a5.23 5.23 0 0 1 3.47-3 8.9 8.9 0 0 1 4.35-.2c.56.12 1.12.26 1.68.42l-.25 2.49a5.84 5.84 0 0 0-3-.8c-.55 0-1.04.09-1.48.27a3.33 3.33 0 0 0-1.85 1.95 4.21 4.21 0 0 0 .03 3 3.32 3.32 0 0 0 2 1.87c.48.16.99.24 1.55.24a8.06 8.06 0 0 0 2.86-.59zm11.03-4.09c0 .79-.12 1.47-.36 2.04a3.68 3.68 0 0 1-1.03 1.41 4.2 4.2 0 0 1-1.6.83 7.41 7.41 0 0 1-4.1 0 4.33 4.33 0 0 1-1.6-.83 3.68 3.68 0 0 1-1.02-1.41 5.23 5.23 0 0 1-.36-2.04V.2h3.06v6.62c0 .38.03.74.09 1.07.06.34.17.63.31.9a1.64 1.64 0 0 0 1.57.82c.4 0 .72-.07.98-.22.25-.15.45-.35.6-.6.14-.27.25-.56.31-.9.06-.33.1-.69.1-1.07V.2h3.05Zm4.6-1.83h.79c.26 0 .5-.03.74-.07.23-.06.43-.14.6-.27.17-.12.3-.29.4-.5.1-.2.15-.45.15-.74 0-.3-.05-.55-.15-.74-.1-.2-.23-.36-.4-.48s-.37-.2-.6-.25a3.43 3.43 0 0 0-.74-.08h-.8ZM123.48.2h3.66c1.77 0 3.07.3 3.9.91.83.61 1.25 1.56 1.25 2.86 0 1.16-.4 2.07-1.2 2.72-.8.66-1.92.98-3.36.98h-1.18v4.02h-3.07zM37.06.2h3.13l1.48 8.82h.03L43.25.2h3.89l1.6 8.82h.04L50.28.2h2.98L50.7 11.69h-3.93l-1.63-8.82h-.04l-1.5 8.82h-4Zm19.48 5.74c0 .48.04.93.14 1.38.1.44.25.83.46 1.17a2.2 2.2 0 0 0 2 1.12 2.22 2.22 0 0 0 1.99-1.12c.2-.34.36-.73.46-1.17a6.37 6.37 0 0 0 0-2.78c-.1-.45-.25-.84-.46-1.17a2.4 2.4 0 0 0-.8-.8 2.3 2.3 0 0 0-1.2-.3 2.25 2.25 0 0 0-1.99 1.1 3.7 3.7 0 0 0-.46 1.17c-.1.44-.14.91-.14 1.4m-3.17 0c0-.92.13-1.75.38-2.48a4.79 4.79 0 0 1 2.9-3.04A6.97 6.97 0 0 1 59.13 0c.94 0 1.77.14 2.5.41a4.77 4.77 0 0 1 2.89 3.05c.25.73.37 1.56.37 2.48 0 .91-.12 1.74-.37 2.47a4.8 4.8 0 0 1-2.92 3.06c-.71.28-1.54.42-2.47.42-.95 0-1.78-.14-2.49-.42a4.84 4.84 0 0 1-2.9-3.06 7.74 7.74 0 0 1-.38-2.47m15.75-.97h.8c.25 0 .5 0 .77-.02s.52-.07.73-.16c.21-.09.4-.22.53-.4.15-.17.22-.42.22-.75a.97.97 0 0 0-.2-.65c-.12-.17-.28-.3-.48-.39-.2-.09-.44-.15-.71-.18a6.73 6.73 0 0 0-.85-.05h-.8ZM66.05.2h5.47c.5 0 .98.06 1.43.17.45.12.84.3 1.18.54.34.24.6.54.8.9.2.36.29.8.29 1.29 0 .76-.18 1.4-.54 1.89-.37.5-.92.83-1.67 1v.04c.25.06.44.16.59.3a2 2 0 0 1 .39.54c.1.22.2.46.3.74.1.28.21.6.36.95l1.11 3.13h-3.19l-.66-2.08c-.15-.49-.3-.9-.43-1.21a3.06 3.06 0 0 0-.45-.76 1.25 1.25 0 0 0-.54-.39c-.2-.07-.45-.1-.73-.1h-.65v4.54h-3.06zm11.03 0h3.06v9.22h4.74v2.27h-7.8Zm11.94 9.22h1.18c1.15 0 2.04-.3 2.65-.88.61-.58.92-1.44.92-2.6 0-1.15-.31-2.02-.94-2.6a3.72 3.72 0 0 0-2.63-.87h-1.18ZM85.95.2h4.18c1 0 1.92.09 2.75.26.84.18 1.55.48 2.15.92.6.43 1.07 1.01 1.4 1.75.34.73.5 1.66.5 2.76a6.6 6.6 0 0 1-.5 2.72A4.61 4.61 0 0 1 95 10.4c-.6.45-1.33.78-2.16.98-.83.2-1.74.3-2.72.3h-4.18ZM0 .2v11.49h3.58V7.54h2.57l.92-2.51h-3.5V2.7h4.34L8.82.2Zm9.92 11.49h3.57V.19H9.92zM15.95.2v11.49h3.58V7.54h2.58l.91-2.51h-3.49V2.7h4.34l.91-2.5Zm14.4 7.74-1.43-4.79-1.38 4.79Zm4.67 3.75H31.4l-.47-1.55H26.9l-.45 1.55h-3.52L27.12.19h3.72z" fill="#9a1032"/>                            </g>
                        </svg>
                    </div>

                    <div className="mt-8 bg-gray-800 dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <span
                                            className=" text-white dark:text-white"
                                        >
                                            Rules
                                        </span>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 dark:text-gray-400 text-sm">
                                        The first and most important thing is that app is still under development
                                        if you find any bug i wonder if you will report it localy on communicators or as issue on github (link below).
                                        Also try to not abuse bug if you find any
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-700 dark:border-gray-700 md:border-t-0 md:border-l">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                        <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <span
                                            className=" text-white dark:text-white"
                                        >
                                            Guide
                                        </span>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 dark:text-gray-400 text-sm">
                                        At this stage most important information for y'all is that you can bet at match
                                        on Matches tab by clicking on button thats appears when there is no placed your
                                        bet on that match and match not started yet
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                <a href="https://github.com/kubakrakowiak" className="ml-1 underline">
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                v0.2.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
