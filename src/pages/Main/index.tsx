import React, { useEffect, useCallback } from 'react';
import * as S from './styles';

import api from '../../services/api';

// Components
import Grid from '../../components/Grid';
import Header from '../../components/Header';
import Popup from '../../components/Popup';

const Main: React.FC = () => {
  const handleGetEmployee = useCallback(async () => {
    try {
      // const response = await api.get('/employee');
      // console.log(response.data);
    } catch {
      alert('Ocorreu um erro!');
    }
  }, []);

  useEffect(() => {
    handleGetEmployee();
  }, [handleGetEmployee]);

  return (
    <S.Container>
      {true && <Popup />}
      <Header />

      <S.Title>Crud</S.Title>
      <S.SubTitle>
        Gerencie seus funcionários da melhor maneira com a Nutcache!
      </S.SubTitle>

      <Grid />
    </S.Container>
  );
};

export default Main;
