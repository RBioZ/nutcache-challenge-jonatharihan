/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
import { toast } from 'react-toastify';
import { Reducer } from 'redux';
import { action } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

//= ============================ACTION TYPES===================================//

export enum CrudTypes {
  LOAD_EMPLOYEE_REQUEST = '@crud/LOAD_EMPLOYEE_REQUEST',
  LOAD_EMPLOYEE_SUCCESS = '@crud/LOAD_EMPLOYEE_SUCCESS',
  LOAD_EMPLOYEE_FAILED = '@crud/LOAD_EMPLOYEE_FAILED',

  ADD_EMPLOYEE_REQUEST = '@crud/ADD_EMPLOYEE_REQUEST',
  ADD_EMPLOYEE_SUCCESS = '@crud/ADD_EMPLOYEE_SUCCESS',
  ADD_EMPLOYEE_FAILED = '@crud/ADD_EMPLOYEE_FAILED',

  DEL_EMPLOYEE_REQUEST = '@crud/DEL_EMPLOYEE_REQUEST',
  DEL_EMPLOYEE_SUCCESS = '@crud/DEL_EMPLOYEE_SUCCESS',
  DEL_EMPLOYEE_FAILED = '@crud/DEL_EMPLOYEE_FAILED',

  EDIT_EMPLOYEE_REQUEST = '@crud/EDIT_EMPLOYEE_REQUEST',
  EDIT_EMPLOYEE_SUCCESS = '@crud/EDIT_EMPLOYEE_SUCCESS',
  EDIT_EMPLOYEE_FAILED = '@crud/EDIT_EMPLOYEE_FAILED',
}

export interface IEmployee {
  _id: string;
  name: string;
  email: string;
  birth_date: string;
  cpf: string;
  gender: string;
  start_date: string;
  team: string;
}

export interface IRequest {
  name: string;
  email: string;
  birth_date: string;
  cpf: string;
  gender: string;
  start_date: string;
  team: string;
}

export interface CrudState {
  readonly employees: IEmployee[];
}

//= ===============================REDUCER======================================//

const INITIAL_STATE: CrudState = {
  employees: [],
};

const reducer: Reducer<CrudState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CrudTypes.LOAD_EMPLOYEE_REQUEST:
      return state;
    case CrudTypes.LOAD_EMPLOYEE_SUCCESS:
      return { ...state, employees: action.payload.employees };
    case CrudTypes.LOAD_EMPLOYEE_FAILED:
      toast('Ocorreu um erro ao tentar carregar os funcionários!', {
        type: 'error',
      });
      return state;

    case CrudTypes.ADD_EMPLOYEE_REQUEST:
      return state;
    case CrudTypes.ADD_EMPLOYEE_SUCCESS:
      toast('Sucesso!', {
        type: 'success',
      });
      return {
        ...state,
        employees: [...state.employees, action.payload.employee],
      };
    case CrudTypes.ADD_EMPLOYEE_FAILED:
      toast('Ocorreu um erro ao tentar adicionar um novo funcionário', {
        type: 'error',
      });
      return state;

    case CrudTypes.DEL_EMPLOYEE_REQUEST:
      return state;
    case CrudTypes.DEL_EMPLOYEE_SUCCESS:
      toast('Sucesso!', {
        type: 'success',
      });
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee._id !== action.payload.id,
        ),
      };
    case CrudTypes.DEL_EMPLOYEE_FAILED:
      toast('Ocorreu um erro ao tentar deletar o funcionário', {
        type: 'error',
      });
      return state;

    case CrudTypes.EDIT_EMPLOYEE_REQUEST:
      return state;
    case CrudTypes.EDIT_EMPLOYEE_SUCCESS:
      toast('Sucesso!', {
        type: 'success',
      });
      console.log(action.payload.employee);
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee._id === action.payload.id) {
            return { ...action.payload.employee };
          }
          return employee;
        }),
      };
    case CrudTypes.EDIT_EMPLOYEE_FAILED:
      toast('Ocorreu um erro ao tentar editar o funcionário', {
        type: 'error',
      });
      return state;

    default:
      return state;
  }
};

export default reducer;

//= ===========================ACTION CREATORS==================================//

export const loadEmployees = (): {
  type: CrudTypes.LOAD_EMPLOYEE_REQUEST;
} => action(CrudTypes.LOAD_EMPLOYEE_REQUEST);

export const addEmployee = (
  employee: IRequest,
): { type: CrudTypes.ADD_EMPLOYEE_REQUEST } =>
  action(CrudTypes.ADD_EMPLOYEE_REQUEST, { employee });

export const delEmployee = (
  id: string,
): { type: CrudTypes.DEL_EMPLOYEE_REQUEST } =>
  action(CrudTypes.DEL_EMPLOYEE_REQUEST, { id });

export const editEmployee = (
  id: string,
  employee: IRequest,
): { type: CrudTypes.EDIT_EMPLOYEE_REQUEST } =>
  action(CrudTypes.EDIT_EMPLOYEE_REQUEST, { id, employee });

//= ================================SAGAS=======================================//

export function* loadEmployeeAsync(): Generator {
  try {
    const response: any = yield call(api.get, 'employee');
    yield put({
      type: CrudTypes.LOAD_EMPLOYEE_SUCCESS,
      payload: { employees: response.data },
    });
  } catch (err) {
    yield put({ type: CrudTypes.LOAD_EMPLOYEE_FAILED });
  }
}

export function* addEmployeeAsync(data: any): Generator {
  try {
    const response: any = yield call(
      api.post,
      'employee',
      data.payload.employee,
    );
    yield put({
      type: CrudTypes.ADD_EMPLOYEE_SUCCESS,
      payload: { employee: response.data },
    });
  } catch (err) {
    yield put({ type: CrudTypes.ADD_EMPLOYEE_FAILED });
  }
}

export function* delEmployeeAsync(data: any): Generator {
  try {
    yield call(api.delete, `employee/${data.payload.id}`);
    yield put({
      type: CrudTypes.DEL_EMPLOYEE_SUCCESS,
      payload: { id: data.payload.id },
    });
  } catch (err) {
    yield put({ type: CrudTypes.DEL_EMPLOYEE_FAILED });
  }
}

export function* editEmployeeAsync(data: any): Generator {
  try {
    yield call(api.put, `employee/${data.payload.id}`, data.payload.employee);
    yield put({
      type: CrudTypes.EDIT_EMPLOYEE_SUCCESS,
      payload: { id: data.payload.id, employee: data.payload.employee },
    });
  } catch (err) {
    yield put({ type: CrudTypes.EDIT_EMPLOYEE_FAILED });
  }
}
