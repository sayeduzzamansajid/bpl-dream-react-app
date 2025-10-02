import React from 'react';

import PlayerCard from '../SelectedPlayerCard/PlayerCard';
const SelectedPlayers = ({ playerSelected, removePlayer }) => {
    return (
        <div className='w-[70vw] md:w-[80vw] mx-auto' >
            {
                playerSelected.map(player=> <PlayerCard player={player} removePlayer={removePlayer}></PlayerCard>)
            }
        </div>
        
    );
};

export default SelectedPlayers;