import React, {useState, createContext} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [showDrawer, setShowDrawer] = useState(true);
  const [drawerContent, setDrawerContent] = useState(null);

  return (
    <Context.Provider
      value={{
        showDrawer,
        setShowDrawer,
        drawerContent,
        setDrawerContent
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
