import React from 'react';
import deleteIcon from '../../assets/delete.png'

const PlayerCard = ({player, removePlayer}) => {
    const handleremovePlayer =() =>{
        removePlayer(player)
    }
    return (
        <div className=' flex justify-between border-1 border-gray-400 py-3 px-5 rounded-lg mt-5'>
            <div className='flex gap-4 items-center '>
                <img className='w-[45px] h-[45px] rounded-lg' src={player.player_img} alt="" />
                <div >
                    <h1 className='font-bold'>{player.player_name}</h1>
                    <p className='text-gray-400'>{player.batting_style}</p>
                </div>
            </div>
            <button onClick={handleremovePlayer}>
                <img className="w-[25px] h-[25px]" src={deleteIcon} alt="" />
            </button>
        </div>
    );
};

export default PlayerCard;