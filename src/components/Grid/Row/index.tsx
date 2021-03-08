/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import * as S from './styles';

interface IRow {
  data: {
    employee: {
      _id: string;
      name: string;
      birth_date: string;
      gender: string;
      email: string;
      cpf: string;
      start_date: string;
      team: string;
    };
  };
}

const Row: React.FC<IRow> = ({ data }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <S.Row>
      <td>{data.employee.name}</td>
      <td>{data.employee.email}</td>
      <td>{data.employee.birth_date}</td>
      <td>{data.employee.team}</td>
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
