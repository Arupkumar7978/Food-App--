import React from 'react';
import Typography from '@mui/material/Typography';
import { FaUserAlt } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';
import { FaFilter } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { IoFastFoodSharp } from 'react-icons/io5';
import { GiFoodChain } from 'react-icons/gi';
import foodDarwaar from '../../Food Darwaar.svg';

const Navbar = () => {
  return (
    <>
      <div className="navbar-section">
        <div className="app-logo-section">
          <div className="app-name-section">
            <span className="app-logo">
              <SiIfood style={{marginTop:'0.4rem'}}/>
            </span>
            <Typography variant="h5" className="app-name">
              Hunger
            </Typography>
          </div>
        </div>
        <div className="user-account">
          <span className="user-circle">
            <FaUserAlt className="user-icon" />
          </span>
        </div>
      </div>

      <div className="overflow-list">
        <div className="common-filters-list">
          <FaFilter className="item-list-icon" />
          <span>Filter</span>
        </div>
        <div className="common-filters-list">
          <AiFillStar className="item-list-icon" />
          <span>Rating: 4.0+</span>
        </div>
        <div className="common-filters-list">
          <IoFastFoodSharp className="item-list-icon" />
          <span>Pure Veg</span>
        </div>
        <div className="common-filters-list">
          <GiFoodChain className="item-list-icon" />
          <span>Non Veg</span>
        </div>
        <div className="common-filters-list">
          <span>Cuisines</span>
        </div>
        <div className="common-filters-list">
          <span>Great Offers</span>
        </div>
        <div className="common-filters-list">
          <span>Delivery Time</span>
        </div>
        <div className="common-filters-list">
          <span>City Special</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
