import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Button, Divider } from '@mui/material';
import Shimmer from '../Shimmer/index';
import useFetch from '../../Internals/useFetch';
import { CiDiscount1 } from 'react-icons/ci';
import {
  IMG_CDN_URL,
  RESTAURANTS_URL,
} from '../../Internals/Constants';
import { getRatingsColor } from '../../Internals/Utility';

const Cards = () => {
  const [data, loading, error] = useFetch(RESTAURANTS_URL);

  return (
    <>
      {loading && !error ? (
        <Shimmer />
      ) : (
        <>
          {/* <h2
            style={{
              margin: 'unset',
              marginTop: '1rem',
              paddingLeft: '1rem',
              color: 'grey',
            }}
          >
            {' '}
            {data?.totalOpenRestaurants} restaurants
          </h2> */}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '25px',
              marginTop: '3.5rem',
            }}
            onScroll={() => console.log('Scrolling...')}
          >
            {data?.cards?.map((restro, index) => (
              <div
                className="hoverCards"
                key={index}
                style={{
                  marginBlock: '10px',
                  transition:
                    'transform .3s cubic-bezier(.215,.61,.355,1)',
                  padding: '10px',
                }}
              >
                {restro?.data?.cloudinaryImageId ? (
                  <img
                    width={252}
                    alt=""
                    src={
                      IMG_CDN_URL + restro?.data?.cloudinaryImageId
                    }
                    height={150}
                    style={{ objectFit: 'fill' }}
                  />
                ) : (
                  <Skeleton
                    variant="rectangular"
                    width={252}
                    height={150}
                    animation="wave"
                  />
                )}
                <div
                  style={{
                    width: '250px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '17px',
                      fontWeight: '500',
                      paddingTop: '10px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {restro?.data?.name}
                  </div>
                </div>
                <span
                  style={{
                    display: 'flex',
                    fontSize: '10px',
                    padding: '5px 0',
                    color: 'grey',
                    maxWidth: '14rem',
                  }}
                >
                  {restro?.data?.cuisines?.join(' , ')}
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      background: getRatingsColor(
                        Number(restro?.data?.avgRating)
                      ),
                      color: 'white',
                      borderRadius: '4px',
                      width: '3rem',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      display: 'flex',
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '-4px',
                      }}
                    >
                      &#9734;
                    </span>
                    <span
                      style={{ fontSize: '12px', fontWeight: '500' }}
                    >
                      {restro?.data?.avgRating}
                    </span>
                  </div>
                  <div style={{ color: 'grey' }}>•</div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: '#535665',
                      fontWeight: '500',
                    }}
                  >
                    {restro?.data?.slaString}
                  </div>
                  <div style={{ color: 'grey' }}>•</div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: '#535665',
                      fontWeight: '500',
                    }}
                  >
                    {restro?.data?.costForTwoString}
                  </div>
                </div>
                <Divider style={{ marginTop: '12px' }} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBlock: '0.5rem',
                    color: '#8a584b',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <CiDiscount1 />
                  </span>
                  <span
                    style={{
                      fontSize: 'small',
                      maxWidth: '14rem',
                      alignItems: 'center',
                      display: 'flex',
                      fontWeight: 'bold',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {restro?.data?.aggregatedDiscountInfoV2
                      ?.descriptionList[0]?.meta ??
                      'No Offers Available  ☹️'}
                  </span>
                </div>
                <Divider />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                  }}
                >
                  <Button
                    size="small"
                    variant="text"
                    style={{ fontWeight: 'bold', fontSize: '0.7rem' }}
                  >
                    Qucik View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Cards;
