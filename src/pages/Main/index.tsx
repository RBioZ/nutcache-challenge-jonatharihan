import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { ApplicationState } from '../../store';
import { loadEmployeesRequest } from '../../store/ducks/Crud';

// Components
import Grid from '../../components/Grid';
import Header from '../../components/Header';
import Popup from '../../components/Popup';

const Main: React.FC = () => {
  const modal = useSelector((state: ApplicationState) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEmployeesRequest());
  }, [dispatch]);

  return (
    <S.Container>
      {modal.createModal && <Popup />}
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
