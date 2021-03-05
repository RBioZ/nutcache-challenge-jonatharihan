import React from 'react';
import * as S from './styles';
import { useAppHook } from '../../contexts/AppContext';
import Row from './Row';

const Grid: React.FC = () => {
  const { employee } = useAppHook();

  return (
    <S.Table>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Data</th>
        <th>Setor</th>
        <th>Ações</th>
      </tr>

      {employee?.map((row) => (
        <Row data={row} />
      ))}
    </S.Table>
  );
};

export default Grid;
