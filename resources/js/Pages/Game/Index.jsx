import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import GameBar from "@/Components/GameBar";

export default function Index({ auth, games}) {
    const [showPastMatches, setShowPastMatches] = useState(false);

    let loadPastMatches = () => {
        setShowPastMatches(true);
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-200 dark:text-gray-200 leading-tight">Matches</h2>}
        >
            <Head title="Dashboard"/>

            {showPastMatches === false &&
                <div className="mt-6 hover:cursor-pointer" onClick={loadPastMatches}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-gray-800 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="flex bg-gray-800 max-w-7xl justify-center text-gray-100">
                                Show old matches
                            </div>
                        </div>
                    </div>
                </div>
            }


            {_.map(games, function(value) {
                var d1 = new Date();
                var d2 = new Date(value['starting_date']);
                if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)))
                {
                    return <GameBar game={value}/>
                }
                else {
                    if (d1 < d2){
                        return <GameBar game={value}/>
                    }
                    else{
                        if (showPastMatches){
                            return <GameBar game={value}/>
                        }
                    }
                }
            })}
        </AuthenticatedLayout>
    );
}
