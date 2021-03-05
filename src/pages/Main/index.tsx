import React from 'react';
import * as S from './styles';

// Components
import Grid from '../../components/Grid';
import Header from '../../components/Header';
import Popup from '../../components/Popup';

const Main: React.FC = () => {
  return (
    <S.Container>
      <Popup />
      <Header />
      <Grid />
    </S.Container>
  );
};

export default Main;
