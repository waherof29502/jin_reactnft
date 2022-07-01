import React from 'react';

import './Header.css';
import { assets } from '../../constants';

const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img src={assets.punkLogo} className='punkLogo' alt='punkLogo' />
      </div>

      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img src={assets.searchIcon} alt='searchIcon' />
        </div>
        <input className='searchInput' placeholder='search' />
      </div>
      <div className='headerItems'>
        <p>Drops</p>
        <p>Marketplace </p>
        <p>Create</p>
      </div>
      <div className='headerActions'>
        <div className='themeSwitchContainer'>
          <img src={assets.themeSwitchIcon} alt='switchIcon' />
        </div>
      </div>
      <div className='loginButton'>Get In</div>
    </div>
  );
};

export default Header;
