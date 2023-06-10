import { createContext } from 'react';

const GlobalContext = createContext({
  user: {
    name: 'Arup',
    email: 'arup@support.com',
  },
});
export default GlobalContext;
