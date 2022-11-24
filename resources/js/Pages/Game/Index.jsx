import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Index({ auth, games}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Matches</h2>}
        >
            <Head title="Dashboard"/>
            {_.map(games, function(value) {
                return <div className="pt-6">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="flex bg-gray-800 max-w-7xl justify-between">
                                <div className="p-6 text-gray-100 dark:text-gray-100 w-36">
                                    {value['team_home']['name']}
                                </div>
                                <div className="p-6 text-gray-100 dark:text-gray-100 flex">
                                    <div className="rounded-lg border w-6 text-center border-indigo-600 mx-2">
                                        {value['team_home_goals'] !== null ? value['team_home_goals'] : '-'}
                                    </div>
                                    :
                                    <div className="rounded-lg border w-6 text-center border-indigo-600 mx-2">
                                        {value['team_away_goals'] !== null ? value['team_away_goals'] : '-'}
                                    </div>
                                </div>
                                <div className="text-right p-6 text-gray-100 dark:text-gray-100 w-36">
                                    {value['team_away']['name']}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ;
            })}
        </AuthenticatedLayout>
    );
}
