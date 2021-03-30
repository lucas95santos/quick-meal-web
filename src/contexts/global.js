import React, {useState, createContext} from 'react';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);

  const onShowDrawer = (content) => {
    setDrawerContent(content);
    setShowDrawer(true);
  }

  const onCloseDrawer = () => {
    setDrawerContent(null);
    setShowDrawer(false);
  }

  return (
    <Context.Provider
      value={{
        showDrawer,
        drawerContent,
        onShowDrawer,
        onCloseDrawer
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
