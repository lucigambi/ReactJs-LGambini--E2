import React from 'react';
import './ItemListContainer.css';
import bannerWeb from '../../assets/bannerWeb.png';
import bannerMobile from '../../assets/bannerMobile.png';

const ItemListBanner = () => {
  return (
    <div className="item-list-banner">
      <img src={bannerWeb} alt="Banner Web" className="banner-web" />
      <img src={bannerMobile} alt="Banner Mobile" className="banner-mobile" />
    </div>
  );
}

export default ItemListBanner;
