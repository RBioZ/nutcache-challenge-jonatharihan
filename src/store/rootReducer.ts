import { combineReducers } from 'redux';

import crud from './ducks/Crud';
import modal from './ducks/Modal';

export default combineReducers({
  crud,
  modal,
});
