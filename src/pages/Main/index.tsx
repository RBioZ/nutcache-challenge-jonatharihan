import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { ApplicationState } from '../../store';
import { loadEmployees } from '../../store/ducks/Crud';

// Components
import Grid from '../../components/Grid';
import Header from '../../components/Header';

import PopupCreate from '../../components/PopupCreate';
import PopupDelete from '../../components/PopupDelete';
import PopupEdit from '../../components/PopupEdit';

const Main: React.FC = () => {
  const modal = useSelector((state: ApplicationState) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  return (
    <S.Container>
      {modal.createModal && <PopupCreate />}
      {modal.deleteModal && <PopupDelete />}
      {modal.editModal && <PopupEdit />}
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
