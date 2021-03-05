import React, { useContext } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import * as S from './styles';

const Row: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <S.Row>
      <td>Jonatha Rihan da Silva</td>
      <td>jonatha_rihan@hotmail.com</td>
      <td>04/08/2000</td>
      <td>TI</td>
      <td>
        <button type="button">
          <FiEdit color={colors.bg_warning} size={18} />
        </button>
        <button type="button">
          <FiTrash color={colors.bg_danger} size={18} />
        </button>
      </td>
    </S.Row>
  );
};

export default Row;
