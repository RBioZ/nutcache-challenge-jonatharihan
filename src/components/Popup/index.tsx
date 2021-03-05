import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateModal } from '../../contexts/AppContext';
import api from '../../services/api';
import * as S from './styles';

interface IData {
  birthDate: string;
  cpf: string;
  email: string;
  gender: string;
  name: string;
  startDate: string;
  team: string;
}

const Popup: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { toggleCreateModal } = useCreateModal();

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

          <input ref={register} name="name" placeholder="Nome Completo" />
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

          <button type="submit">Cadastrar</button>
        </form>
      </S.Container>
    </S.Background>
  );
};

export default Popup;
