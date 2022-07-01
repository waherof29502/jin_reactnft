import React, { useState, useEffect } from 'react';
import { assets } from '../../constants';
import './Main.css';

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              className='selectedPunk'
              src={activePunk.image_preview_url}
              alt='img'
            />
          </div>
        </div>
        <div className='punkDetails' style={{ color: '#fff' }}>
          <div className='title'>
            {activePunk.name}
            <span className='itemNumber'>#{activePunk.token_id}</span>
          </div>

          <div className='owner'>
            <div className='ownerImageContainer'>
              <img src={activePunk.owner.profile_img_url} alt='' />
            </div>
            <div className='ownerDetails'>
              <div className='ownerNameAndHandle'>
                <div>{activePunk.owner.address}</div>
                <div className='ownerHandle'>@jinwangartist </div>
              </div>
              <div className='ownerLink'>
                <img src={assets.instagramLogo} alt='' />
              </div>

              <div className='ownerLink'>
                <img src={assets.twitterLogo} alt='' />
              </div>
              <div className='ownerLink'>
                <img src={assets.moreLogo} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
