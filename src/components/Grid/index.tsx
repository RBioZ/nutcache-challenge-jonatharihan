import React from 'react';

import * as S from './styles';

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
      <tr>
        <td>Jonatha Rihan da Silva</td>
        <td>jonatha_rihan@hotmail.com</td>
        <td>04/08/2000</td>
        <td>TI</td>
        <td>
          <button type="button">+</button>
          <button type="button">-</button>
        </td>
      </tr>
      <tr>
        <td>Michel Leonidas Aleixo</td>
        <td>michelleonidas@hotmail.com</td>
        <td>04/08/2000</td>
        <td>Design</td>
      </tr>
      <tr>
        <td>Daniel dos Santos</td>
        <td>danielmaquininhas@hotmail.com</td>
        <td>04/08/2000</td>
        <td>Maquininhas</td>
      </tr>
      <tr>
        <td>Guilherme Marley de</td>
        <td>comercial@hotmail.com</td>
        <td>04/08/2000</td>
        <td>Comercial</td>
      </tr>
    </S.Table>
  );
};

export default Grid;
