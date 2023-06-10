import React from 'react';
import Button from '@mui/material/Button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import banner1 from '../../Internals/Assests/banner1.avif';
import banner2 from '../../Internals/Assests/banner2.avif';
const AddBanners = () => {
  return (
    <>
      <h3 className="ad-banner-text">
        Inspiration for your first order
      </h3>
      <div className="food-short-menu">
        <Button variant="outlined" fullWidth className="see-more-btn">
          See More <MdKeyboardArrowDown className="up-down-arrow" />
        </Button>
      </div>
      <img src={banner1} alt="" width={'100%'} />
      <h3 className="ad-banner-text">
        Delivery Restaurants in Bhubaneswar
      </h3>
    </>
  );
};

export default AddBanners;
