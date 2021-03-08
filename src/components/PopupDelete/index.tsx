import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';

import * as S from './styles';

const PopupDelete: React.FC = () => {
  const dispatch = useDispatch();
  const { colors } = useContext(ThemeContext);

  return (
    <S.Background>
      <S.Container>
        <h1>Deletar?</h1>

        <div className="wrapper">
          <button style={{ backgroundColor: colors.bg_danger }} type="button">
            Cancelar
          </button>
          <button type="submit">Cadastrar</button>
        </div>
      </S.Container>
    </S.Background>
  );
};

export default PopupDelete;
