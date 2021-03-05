import React, { createContext, useState, Dispatch, useContext } from 'react';

interface AppContextData {
  createModalVisible: boolean;
  setCreateModalVisible: Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        createModalVisible,
        setCreateModalVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hooks

export const useCreateModal = (): AppContextData => {
  const context = useContext(AppContext);
  const { createModalVisible, setCreateModalVisible } = context;
  return { createModalVisible, setCreateModalVisible };
};
