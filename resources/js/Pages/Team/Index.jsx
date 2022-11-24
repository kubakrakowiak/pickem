import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Index({ auth, teams}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Teams</h2>}
        >
            <Head title="Dashboard"/>
            {_.map(teams, function(value) {
                return <div className="pt-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">{value['name']} ({value['short_name']})</div>
                        </div>
                    </div>
                </div>
                ;
            })}
        </AuthenticatedLayout>
    );
}
