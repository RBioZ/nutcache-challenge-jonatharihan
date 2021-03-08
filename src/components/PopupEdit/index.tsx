/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalEdit } from '../../store/ducks/Modal';
import { editEmployee, IRequest } from '../../store/ducks/Crud';
import { ApplicationState } from '../../store';

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
  const dispatch = useDispatch();

  const modal = useSelector((state: ApplicationState) => state.modal);

  const { register, handleSubmit, setValue } = useForm();
  const { colors } = useContext(ThemeContext);

  const submitRegister = async (data: IData) => {
    dispatch(editEmployee(String(modal.employee?._id), data as IRequest));
    dispatch(closeModalEdit());
  };

  useEffect(() => {
    setValue('name', modal.employee?.name);
    setValue('email', modal.employee?.email);
    setValue('cpf', modal.employee?.cpf);
    setValue('gender', modal.employee?.gender);
    setValue('team', modal.employee?.team);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Background>
      <S.Container>
        <form onSubmit={handleSubmit(submitRegister)}>
          <h3>Editar de Funcionário</h3>

          <input ref={register} name="name" placeholder="Nome Completo" />
          <input ref={register} name="email" placeholder="E-mail" />
          <input ref={register} name="cpf" placeholder="CPF" />

          <div>
            <div className="wrapper">
              <p>Data de Nascimento</p>
              <input
                defaultValue={`${modal.employee?.birth_date}`}
                ref={register}
                type="date"
                id="birthday"
                name="birth_date"
              />
            </div>

            <div className="wrapper">
              <p>Data de Adimissão</p>
              <input
                defaultValue={`${modal.employee?.start_date}`}
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
              <select ref={register} name="team" id="team">
                <option value=""> </option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
          </div>

          <div className="wrapper">
            <button
              onClick={() => dispatch(closeModalEdit())}
              style={{ backgroundColor: colors.bg_danger }}
              type="button"
            >
              Cancelar
            </button>
            <button type="submit">Editar</button>
          </div>
        </form>
      </S.Container>
    </S.Background>
  );
};

export default Popup;
