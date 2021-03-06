/* eslint-disable camelcase */
/* eslint-disable no-shadow */

import { Reducer } from 'redux';
import { action } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

//= ============================ACTION TYPES===================================//

export enum CrudTypes {
  ADD_EMPLOYEE = '@crud/ADD_EMPLOYEE',
  DEL_EMPLOYEE = '@crud/DEL_EMPLOYEE',
  EDIT_EMPLOYEE = '@crud/EDIT_EMPLOYEE',
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

export interface CrudState {
  readonly Employees: IEmployee[];
}

//= ===============================REDUCER======================================//

const INITIAL_STATE: CrudState = {
  Employees: [],
};

const reducer: Reducer<CrudState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CrudTypes.ADD_EMPLOYEE:
      return state;
    case CrudTypes.DEL_EMPLOYEE:
      return state;
    case CrudTypes.EDIT_EMPLOYEE:
      return state;
    default:
      return state;
  }
};

export default reducer;

//= ===========================ACTION CREATORS==================================//

export const addEmployee = (
  employee: IEmployee,
): { type: CrudTypes.ADD_EMPLOYEE } =>
  action(CrudTypes.ADD_EMPLOYEE, { employee });

export const delEmployee = (id: string): { type: CrudTypes.DEL_EMPLOYEE } =>
  action(CrudTypes.DEL_EMPLOYEE, { id });

export const editEmployee = (
  id: string,
  employee: IEmployee,
): { type: CrudTypes.ADD_EMPLOYEE } =>
  action(CrudTypes.ADD_EMPLOYEE, { id, employee });

//= ================================SAGAS=======================================//

/*
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

*/
