import React from 'react';

import * as S from './styles';

import { useCreateModal } from '../../contexts/AppContext';

// Image
import NutLogo from '../../assets/images/nutcache-logo.png';

const Header: React.FC = () => {
  const { toggleCreateModal } = useCreateModal();

  return (
    <S.Container>
      <S.Logo src={NutLogo} alt="logo" width="220" height="56" />
      <S.Button onClick={() => toggleCreateModal(true)}>Criar</S.Button>
    </S.Container>
  );
};

export default Header;
