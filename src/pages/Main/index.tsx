import React from 'react';
import * as S from './styles';

// Components
import Grid from '../../components/Grid';
import Header from '../../components/Header';

const Main: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Grid />
    </S.Container>
  );
};

export default Main;
