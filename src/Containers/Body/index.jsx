import React from 'react';
import Cards from '../../Components/Cards/index';
import useOnline from '../../Internals/useOnline';

const Index = () => {
  const [isOnline] = useOnline();

  if(!isOnline) return "Why Offline baby  ? "
  return (
    <>
      <Cards />
    </>
  );
};

export default Index;
