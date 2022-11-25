import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Index({ auth, users}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-200 dark:text-gray-200 leading-tight">LeaderBoard</h2>}
        >
            <Head title="Dashboard"/>
            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" content-center overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-400 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-2">
                                    #
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Points
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {_.map(users, function(value) {
                                return <tr className="bg-gray-900 border-b dark:bg-gray-900 border-gray-700 dark:border-gray-700">
                                    <th scope="row"
                                        className="py-4 px-2 font-medium whitespace-nowrap text-white dark:text-white">
                                        {value['rank']}
                                    </th>
                                    <td className="py-4 px-6">
                                        {value['name']}
                                    </td>
                                    <td className="py-4 px-6">
                                        {value['score']}
                                    </td>
                                </tr>
                            })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
