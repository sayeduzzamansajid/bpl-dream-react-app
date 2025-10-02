import React from 'react';
import doller from '../../assets/pngimg.com - coin_PNG36871.png'
import navImg from '../../assets/logo.png'

const NavBar = ({availableBalance}) => {
    return (
        <div className="navbar w-[80vw] mx-auto">
      <div className="flex-1">
        <a className="  text-xl">
          <img className="w[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex">
        <span className='mr-1'>{availableBalance}</span>
        <span className='mr-1'>Coin</span>
        <img className='w-[25px] h-[25px]' src={doller} alt="" />
      </div>
    </div>
    );
};

export default NavBar;