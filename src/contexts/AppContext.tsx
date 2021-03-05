/* eslint-disable camelcase */
import React, { createContext, useState, useContext, Dispatch } from 'react';

interface IEmployee {
  _id: string;
  name: string;
  email: string;
  birth_date: string;
  cpf: string;
  gender: string;
  start_date: string;
  team: string;
}

interface AppContextData {
  createModalVisible: boolean;
  toggleCreateModal(status: boolean): void;
  employee: IEmployee[] | null;
  setEmployee: Dispatch<React.SetStateAction<IEmployee[] | null>>;
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [employee, setEmployee] = useState<IEmployee[] | null>([]);

  const toggleCreateModal = (status: boolean): void => {
    setCreateModalVisible(status);
  };

  return (
    <AppContext.Provider
      value={{
        createModalVisible,
        toggleCreateModal,
        employee,
        setEmployee,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hooks

export const useAppHook = (): AppContextData => {
  const context = useContext(AppContext);
  const {
    createModalVisible,
    toggleCreateModal,
    employee,
    setEmployee,
  } = context;
  return { createModalVisible, toggleCreateModal, employee, setEmployee };
};
