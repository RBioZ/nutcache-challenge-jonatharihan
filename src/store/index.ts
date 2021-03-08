import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { CrudState } from './ducks/Crud';
import { ModalState } from './ducks/Modal';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  crud: CrudState;
  modal: ModalState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
