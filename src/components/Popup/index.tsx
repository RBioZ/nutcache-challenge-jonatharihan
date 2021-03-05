/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ThemeContext } from 'styled-components';
import { useAppHook } from '../../contexts/AppContext';
import api from '../../services/api';
import * as S from './styles';

interface IData {
  birth_date: string;
  cpf: string;
  email: string;
  gender: string;
  name: string;
  start_date: string;
  team: string;
}

const Popup: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { toggleCreateModal } = useAppHook();
  const { colors } = useContext(ThemeContext);

  const submitRegister = async (data: IData) => {
    try {
      await api.post('/employee', data);
      // eslint-disable-next-line no-alert
      alert('Funcionário Cadastrado!');
      // eslint-disable-next-line no-empty
    } catch {
      // eslint-disable-next-line no-alert
      alert('Ocorreu um error!');
    }
    toggleCreateModal(false);
  };

  return (
    <S.Background>
      <S.Container>
        <form onSubmit={handleSubmit(submitRegister)}>
          <h3>Cadastro de Funcionário</h3>

          <input
            onClick={() => toggleCreateModal(false)}
            ref={register}
            name="name"
            placeholder="Nome Completo"
          />
          <input ref={register} name="email" placeholder="E-mail" />
          <input ref={register} name="cpf" placeholder="CPF" />

          <div>
            <div className="wrapper">
              <p>Data de Nascimento</p>
              <input
                ref={register}
                type="date"
                id="birthday"
                name="birth_date"
              />
            </div>

            <div className="wrapper">
              <p>Data de Adimissão</p>
              <input
                ref={register}
                type="date"
                id="admission"
                name="start_date"
              />
            </div>
          </div>

          <div>
            <div className="wrapper">
              <p>Gênero</p>
              <select ref={register} name="gender" id="gender">
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="none">Outro</option>
              </select>
            </div>

            <div className="wrapper">
              <p>Equipe</p>
              <select ref={register} name="team" id="gender">
                <option value=""> </option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
          </div>

          <div className="wrapper">
            <button
              onClick={() => toggleCreateModal(false)}
              style={{ backgroundColor: colors.bg_danger }}
              type="button"
            >
              Cancelar
            </button>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </S.Container>
    </S.Background>
  );
};

export default Popup;
