import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import GameBar from "@/Components/GameBar";

export default function Index({ auth, games}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-200 dark:text-gray-200 leading-tight">Matches</h2>}
        >
            <Head title="Dashboard"/>
            {_.map(games, function(value) {
                return <GameBar game={value}/>
            })}
        </AuthenticatedLayout>
    );
}
