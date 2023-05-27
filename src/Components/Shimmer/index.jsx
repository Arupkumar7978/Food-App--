import React, { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const CardShimmer = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '25px',
          marginTop: '3.5rem',
        }}
      >
        {Array.from(new Array(20).fill('')).map((item, index) => (
          <Box
            key={index}
            style={{
              borderRadius: '4px',
              //   border: '1px solid #fff',
              marginBlock: '10px',
              padding: '10px',
              borderColor: '#d3d5df',
              boxShadow: '0 4px 7px 0 rgba(218,220,230,.6)',
            }}
          >
            <Skeleton
              variant="rectangular"
              width={252}
              height={150}
              animation="wave"
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: '1rem', padding: '5px 0' }}
              animation="wave"
            />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Skeleton width="30%" animation="wave" />
              <Skeleton width="30%" animation="wave" />
              <Skeleton width="30%" animation="wave" />
            </div>
            <Skeleton
              animation="wave"
              height={2}
              width="100%"
              style={{ marginTop: 10 }}
            />
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Skeleton
                width="30%"
                animation="wave"
                style={{
                  marginBottom: 6,
                  marginTop: 6,
                  padding: '15px 30px',
                }}
              />
            </div>
          </Box>
        ))}
      </div>
    </>
  );
};

export default CardShimmer;
