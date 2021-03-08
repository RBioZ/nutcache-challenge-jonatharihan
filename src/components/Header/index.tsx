import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { openModalCreate } from '../../store/ducks/Modal';

import * as S from './styles';

// Image
import NutLogo from '../../assets/images/nutcache-logo.png';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Logo src={NutLogo} alt="logo" width="220" height="56" />
      <div>
        <S.PreviusButton style={{ borderColor: colors.bg_warning }}>
          <FiEdit color={colors.bg_warning} size={18} />
        </S.PreviusButton>
        <S.PreviusButton style={{ borderColor: colors.bg_danger }}>
          <FiTrash color={colors.bg_danger} size={18} />
        </S.PreviusButton>
        <S.Button onClick={() => dispatch(openModalCreate())}>Criar</S.Button>
      </div>
    </S.Container>
  );
};

export default Header;
