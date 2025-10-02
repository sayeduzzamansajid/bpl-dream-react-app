import React, { useState } from 'react';

import profile from '../../assets/Group.png'
import flag from '../../assets/flag.png'


const Card = ({ player, setAvailableBalence, availableBalance, playerSelected, setPlayerSelected }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="card bg-base-100 shadow-sm p-4">
            <figure>
                <img className="rounded-2xl w-full h-[300px] object-cover"
                    src={player['player_img']
                    }
                    alt="player" />
            </figure>
            <div className="mt-3">
                <div className="flex items-center gap-2">
                    <img className="w-[20px] h-[20px]" src={profile} alt="" />
                    <h2 className="card-title">{player.player_name
                    }</h2>
                </div>
                <div className="flex justify-between border-b-1 border-gray-400 pb-2">
                    <div className='flex gap-2 mt-4'>
                        <img className="w-[20px] h-[20px]" src={flag} alt="" />
                        <span>{player.player_country}</span>
                    </div>
                    <button className='btn'>{player.playing_role
                    }</button>
                </div>
                <div className='flex gap-2 justify-between'>
                    <span className='font-bold'>Ratting</span>
                    <span className='font-semibold'>{[player.rating
                    ]}</span>
                </div>
                <div className='flex gap-2 justify-between mt-4'>
                    <span className='font-bold'>{player.batting_style}</span>
                    <span className='text-gray-500'>{player.bowling_style
                    }</span>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <p className='font-bold'>Price: ${player.price}</p>
                    <button onClick={() => {
                        const playerPrice =player.price.split(",").join("");
                        if (availableBalance >= playerPrice){
                            setIsSelected(true);
                            const newBalence = availableBalance-playerPrice
                            setAvailableBalence(newBalence);
                            setPlayerSelected([...playerSelected, player])

                        }
                        else{
                            alert("Insuffecient Balence")
                        }


                    }
                    } className='btn' disabled={isSelected}>{isSelected ? "Selected" : "Choose player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;