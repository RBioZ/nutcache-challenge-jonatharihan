import React from 'react';
import * as S from './styles';
import Row from './Row';

const Grid: React.FC = () => {
  return (
    <S.Table>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Data</th>
        <th>Setor</th>
        <th>Ações</th>
      </tr>

      <Row />
    </S.Table>
  );
};

export default Grid;
