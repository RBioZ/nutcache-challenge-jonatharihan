import React from 'react';

import * as S from './styles';

const Popup: React.FC = () => {
  return (
    <S.Background>
      <S.Container>
        <form>
          <h3>Cadastro de Funcionário</h3>

          <input name="name" placeholder="Nome Completo" />
          <input name="email" placeholder="E-mail" />
          <input name="taxid" placeholder="CPF" />

          <div>
            <div className="wrapper">
              <p>Data de Nascimento</p>
              <input type="date" id="birthday" name="birthday" />
            </div>

            <div className="wrapper">
              <p>Data de Adimissão</p>
              <input type="date" id="admission" name="admission" />
            </div>
          </div>

          <div>
            <div className="wrapper">
              <p>Gênero</p>
              <select name="gender" id="gender">
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="none">Outro</option>
              </select>
            </div>

            <div className="wrapper">
              <p>Equipe</p>
              <select name="team" id="gender">
                <option value=""> </option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
          </div>

          <button type="button">Cadastrar</button>
        </form>
      </S.Container>
    </S.Background>
  );
};

export default Popup;
