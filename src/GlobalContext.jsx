import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [createModal, setCreateModal] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ createModal, setCreateModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
