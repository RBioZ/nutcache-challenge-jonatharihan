import React, { createContext, useState, useContext } from 'react';

interface AppContextData {
  createModalVisible: boolean;
  toggleCreateModal(status: boolean): void;
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const toggleCreateModal = (status: boolean): void => {
    setCreateModalVisible(status);
  };

  return (
    <AppContext.Provider
      value={{
        createModalVisible,
        toggleCreateModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hooks

export const useCreateModal = (): AppContextData => {
  const context = useContext(AppContext);
  const { createModalVisible, toggleCreateModal } = context;
  return { createModalVisible, toggleCreateModal };
};
