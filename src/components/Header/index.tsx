import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import {
  openModalCreate,
  openModalDelete,
  openModalEdit,
} from '../../store/ducks/Modal';
import { ApplicationState } from '../../store';

import * as S from './styles';

// Image
import NutLogo from '../../assets/images/nutcache-logo.png';

const Header: React.FC = () => {
  const crud = useSelector((state: ApplicationState) => state.crud);
  const dispatch = useDispatch();
  const { colors } = useContext(ThemeContext);

  const handleEditPrevius = () => {
    dispatch(openModalEdit(crud.employees[crud.employees.length - 1]));
  };

  const handleDeletePrevius = () => {
    dispatch(openModalDelete(crud.employees[crud.employees.length - 1]));
  };

  return (
    <S.Container>
      <S.Logo src={NutLogo} alt="logo" width="220" height="56" />
      <div>
        <S.PreviusButton
          onClick={() => handleEditPrevius()}
          style={{ borderColor: colors.bg_warning }}
        >
          <FiEdit color={colors.bg_warning} size={18} />
        </S.PreviusButton>
        <S.PreviusButton
          onClick={() => handleDeletePrevius()}
          style={{ borderColor: colors.bg_danger }}
        >
          <FiTrash color={colors.bg_danger} size={18} />
        </S.PreviusButton>
        <S.Button onClick={() => dispatch(openModalCreate())}>Criar</S.Button>
      </div>
    </S.Container>
  );
};

export default Header;
