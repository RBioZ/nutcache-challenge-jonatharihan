import { all, takeLatest } from 'redux-saga/effects';

import { CrudTypes, loadEmployeeAsync } from './ducks/Crud';

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(CrudTypes.LOAD_EMPLOYEE_REQUEST, loadEmployeeAsync),
  ]);
}
