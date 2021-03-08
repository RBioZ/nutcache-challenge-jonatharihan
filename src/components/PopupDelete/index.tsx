/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalDelete } from '../../store/ducks/Modal';
import { delEmployee } from '../../store/ducks/Crud';
import { ApplicationState } from '../../store';

import * as S from './styles';

const PopupDelete: React.FC = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: ApplicationState) => state.modal);
  const { colors } = useContext(ThemeContext);

  return (
    <S.Background>
      <S.Container>
        <h2>Deletar?</h2>

        <p>
          Tem certeza que deseja excluir <strong>{modal.employee?.name}</strong>{' '}
          da sua base de dados?
        </p>

        <div className="wrapper">
          <button
            onClick={() => dispatch(closeModalDelete())}
            style={{ backgroundColor: colors.bg_danger }}
            type="button"
          >
            Cancelar
          </button>
          <button
            onClick={() => dispatch(delEmployee(String(modal.employee?._id)))}
            type="submit"
          >
            Deletar
          </button>
        </div>
      </S.Container>
    </S.Background>
  );
};

export default PopupDelete;
