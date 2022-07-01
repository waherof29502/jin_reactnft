import React from 'react';
import { assets } from '../../constants';
import './CollectionCard.css';

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className='collectionCard'>
      <img src={image} alt='img' />
      <div className='details'>
        <div className='name'>
          {name}
          <div className='id'>#{id}</div>
        </div>
        <div className='priceContainer'>
          <img src={assets.weth} className='wethImage' alt='weth' />
          <div className='price'>{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
