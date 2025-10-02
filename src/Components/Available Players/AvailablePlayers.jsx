import React, { use } from 'react';
import Card from '../Player Card/Card';


const AvailablePlayers = ({ playerPromise, setAvailableBalence,availableBalance, playerSelected, setPlayerSelected }) => {
    const playerData = use(playerPromise)
    return (
        <div className="w-[70vw] md:w-[80vw] grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            {
                playerData.map(player => <Card availableBalance={availableBalance} setAvailableBalence={setAvailableBalence} player={player} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected} ></Card>
                )
            }

        </div>
    );
};

export default AvailablePlayers;