import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { openModalCreate } from '../../store/ducks/Modal';

import * as S from './styles';

// Image
import NutLogo from '../../assets/images/nutcache-logo.png';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Logo src={NutLogo} alt="logo" width="220" height="56" />
      <S.Button onClick={() => dispatch(openModalCreate())}>Criar</S.Button>
    </S.Container>
  );
};

export default Header;
