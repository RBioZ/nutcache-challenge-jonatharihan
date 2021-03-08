import { all, takeLatest } from 'redux-saga/effects';

import { CrudTypes, loadEmployeeAsync, addEmployeeAsync } from './ducks/Crud';

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(CrudTypes.LOAD_EMPLOYEE_REQUEST, loadEmployeeAsync),
    takeLatest(CrudTypes.ADD_EMPLOYEE_REQUEST, addEmployeeAsync),
  ]);
}