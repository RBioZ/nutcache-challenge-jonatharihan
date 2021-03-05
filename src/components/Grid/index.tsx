import React from 'react';

// import { Container } from './styles';

const Grid: React.FC = () => {
  return (
    <table>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Data</th>
        <th>Setor</th>
      </tr>
      <tr>
        <td>Jonatha Rihan da Silva</td>
        <td>jonatha_rihan@hotmail.com</td>
        <td>04/08/2000</td>
        <td>TI</td>
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
    </table>
  );
};

export default Grid;
