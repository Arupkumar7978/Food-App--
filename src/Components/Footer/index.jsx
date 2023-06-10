import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { BsBagFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Delivery"
            icon={<BsBagFill className="buttom-nav-icons" />}
            className="buttom-nav"
          />
          <BottomNavigationAction
            label="Cart"
            icon={<FaShoppingCart className="buttom-nav-icons" />}
            className="buttom-nav"
          />
          <BottomNavigationAction
            label="Dine In"
            icon={
              <MdEmojiFoodBeverage className="buttom-nav-icons" />
            }
            className="buttom-nav"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
