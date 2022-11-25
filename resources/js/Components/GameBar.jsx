import React, {useRef, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/inertia-react';
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function GameBar(props) {
    const [modalMatchId, setModalMatchId] = useState(false);
    const teamHomeGoalsInput = useRef();
    const teamAwayGoalsInput = useRef();

    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
    } = useForm({
        team_home_score: '',
        team_away_score: '',
        game_id: props.game['id']
    });


    const changeModalMatchId = () => {
        setModalMatchId(true);
    };

    const closeModal = () => {
        setModalMatchId(false);
    };

    const setBet = (e) => {
        e.preventDefault();
        data['game_id'] = props.game['id'];
        axios.post(route('bet.set'), data).then(function (response) {
            closeModal();
            props.game['isBetPlaced'] = true;
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };

    return  (
        <div className="pt-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-gray-800 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="flex bg-gray-800 max-w-7xl justify-between">
                        <div className="p-6 text-gray-100 dark:text-gray-100 w-36">
                            {props.game['team_home']['name']}
                        </div>
                        {props.game['isBetPlaced'] || props.game['started'] ?
                            <div className="p-6 text-gray-100 dark:text-gray-100 flex">
                                <div className="rounded-lg border w-6 text-center border-indigo-600 mx-2">
                                    {props.game['team_home_goals'] !== null ? props.game['team_home_goals'] : '-'}
                                </div>
                                :
                                <div className="rounded-lg border w-6 text-center border-indigo-600 mx-2">
                                    {props.game['team_away_goals'] !== null ? props.game['team_away_goals'] : '-'}
                                </div>
                            </div>
                            :
                            <div onClick={changeModalMatchId} className="p-6 text-gray-100 dark:text-gray-100 flex">
                                <PrimaryButton>Place Bet</PrimaryButton>
                            </div>
                        }
                        <div className="text-right p-6 text-gray-100 dark:text-gray-100 w-36">
                            {props.game['team_away']['name']}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modalMatchId} onClose={closeModal}>
                <form onSubmit={setBet} className="p-6">
                    <h2 className="text-lg font-medium text-gray-100 dark:text-gray-100">
                        Are you sure your want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-400 dark:text-gray-400">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>

                    <div className="mt-6">
                        <InputLabel for="team_home_goals" value="Away" className="sr-only" />

                        <TextInput
                            id="team_home_goals"
                            type="number"
                            name="team_home_goals"
                            ref={teamHomeGoalsInput}
                            value={data.team_home_score}
                            handleChange={(e) => setData('team_home_score', e.target.value)}
                            className="mt-1 block w-3/4"
                            placeholder="0"
                        />

                        <InputError message={errors.team_home_score} className="mt-2" />
                    </div>

                    <div className="mt-6">
                        <InputLabel for="team_away_goals" value="Away" className="sr-only" />

                        <TextInput
                            id="team_away_goals"
                            type="number"
                            name="team_away_goals"
                            ref={teamAwayGoalsInput}
                            value={data.team_away_score}
                            handleChange={(e) => setData('team_away_score', e.target.value)}
                            className="mt-1 block w-3/4"
                            placeholder="0"
                        />

                        <InputError message={errors.team_away_score} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ml-3" processing={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
