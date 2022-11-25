import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Index({ auth, groups}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-200 dark:text-gray-200 leading-tight">Groups</h2>}
        >
            <Head title="Dashboard"/>
            {_.map(groups, function(value) {
                return <div className="pt-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-gray-800 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-100 dark:text-gray-100">{value['name']}</div>
                        </div>
                    </div>
                </div>
                    ;
            })}
        </AuthenticatedLayout>
    );
}
