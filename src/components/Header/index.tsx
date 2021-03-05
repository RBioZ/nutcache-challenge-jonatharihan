import React from 'react';

import * as S from './styles';

// Image
import NutLogo from '../../assets/images/nutcache-logo.png';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo src={NutLogo} alt="logo" width="220" height="56" />
      <S.Button>Criar</S.Button>
    </S.Container>
  );
};

export default Header;
