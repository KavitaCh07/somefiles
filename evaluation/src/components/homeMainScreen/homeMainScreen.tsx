import './homeMainScreen.css';
import search from '../../assets/icons/search.png';
import add_btn from '../../assets/icons/add_btn.png';
import Modal from '../modal/modal';
import React, { useState } from "react";
import pathCopy from '../../assets/icons/pathCopy.png'
import Card from '../card/card';


const HomeMainScreen = () => {
  const [modal, setModal] = useState(false);
  const displayData = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const siteData = JSON.parse(localStorage.getItem(displayData) || "[]");

  return (
    <div>
      <div className="full-home-screen">

        {/* topbar start*/}
        <div className="home-inner-top">
          <div className="sites">Sites</div>
          <div className="home-inner-top-right">
            <div className='searchbar'>
              <input type="text" className='searchbar-input' placeholder='Search' name="" id="" />
              <img src={search} className="search" alt="" />
            </div>
            <div className='pluse-btn'>
              <img src={add_btn} className="add_btn" onClick={() => { setModal(true); }} alt="" />
              {modal && <Modal />}
            </div>
          </div>
        </div>
        {/* topbar end */}

        {JSON.stringify(siteData) === "[]" ? (
          <div className="center-section">
            <div className="grey-box">
              <div className="grey-box-content">
                Please Click on the “+” symbol
                to add sites
              </div>
            </div>
          </div>
        ) : (<div className='social-media-container'>
          <div className='add-sites'>
            <div className='social-media'>Social Media</div>
            <div className='count-circle'>{siteData.length < 10
              ? `0${siteData.length}`
              : siteData.length}</div>
            <div><img src={pathCopy} alt="" /></div>
          </div>
        </div>)}



<Card/>





      </div>
    </div>
  );

};

export default HomeMainScreen;