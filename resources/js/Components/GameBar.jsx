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
import Moment from 'moment';


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
                            <div className="rounded-lg border border-indigo-600 p-4 my-2 text-gray-100 dark:text-gray-100 flex flex-col justify-center">
                                <div className="text-xs justify-center">
                                        {Moment(props.game['starting_date']).format('D MMM HH:mm')}
                                </div>
                                <div className="text-center justify-center flex">
                                    <div className="text-xs px-2">
                                        { props.game['isBetPlaced'] && props.game['bet'] ? '('+props.game['bet']['team_home_goals']+')' : ''}
                                    </div>
                                        {props.game['team_home_goals'] !== null ? props.game['team_home_goals'] : '-'}
                                    :
                                        {props.game['team_away_goals'] !== null ? props.game['team_away_goals'] : '-'}
                                    <div className="text-xs px-2">
                                        { props.game['isBetPlaced'] && props.game['bet'] ? '('+props.game['bet']['team_away_goals']+')' : ''}
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="flex flex-col justify-center">
                                <div onClick={changeModalMatchId} className="p-6 text-gray-100 dark:text-gray-100 flex">
                                    <PrimaryButton>Place Bet <br/>{Moment(props.game['starting_date']).format('D MMM HH:mm')}</PrimaryButton>
                                </div>
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
                        Betting system
                    </h2>
                    <h4 className="text-gray-500 dark:text-gray-100">
                        {props.game['team_home']['name']} - {props.game['team_away']['name']}
                    </h4>

                    <p className="mt-1 text-sm text-gray-400 dark:text-gray-400">
                        Once your bet is submitted, you can not edit it at current version. Please
                        bet only if you re sure its your final decision.
                    </p>
                    <div className="flex justify-center">

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
                                min="0"
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
                                min="0"
                            />

                            <InputError message={errors.team_away_score} className="mt-2" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <PrimaryButton className="ml-3" processing={processing}>
                            Place Bet
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
