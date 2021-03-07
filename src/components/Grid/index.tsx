/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import Row from './Row';
import { ApplicationState } from '../../store';

const Grid: React.FC = () => {
  const crud = useSelector((state: ApplicationState) => state.crud);

  return (
    <S.Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Data</th>
          <th>Setor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {crud.employees.map((employee) => {
          return <Row key={employee._id} />;
        })}
      </tbody>
    </S.Table>
  );
};

export default Grid;
