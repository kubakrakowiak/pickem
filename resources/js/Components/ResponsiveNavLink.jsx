import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-600 text-indigo-300 bg-indigo-900/50 focus:text-indigo-200 focus:bg-indigo-900 ocus:border-indigo-300'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-700 hover:border-gray-600 focus:text-gray-200 focus:bg-gray-700 focus:border-gray-600'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
