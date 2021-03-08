/* eslint-disable no-shadow */
import { Reducer } from 'redux';
import { action } from 'typesafe-actions';
//= ============================ACTION TYPES===================================//

export enum ModalTypes {
  OPEN_MODAL_CREATE = '@modal/OPEN_MODAL_CREATE',
  CLOSE_MODAL_CREATE = '@modal/CLOSE_MODAL_CREATE',
}

export interface ModalState {
  readonly createModal: boolean;
}

//= ===============================REDUCER======================================//

const INITIAL_STATE: ModalState = {
  createModal: false,
};

const reducer: Reducer<ModalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalTypes.OPEN_MODAL_CREATE:
      return { ...state, createModal: true };
    case ModalTypes.CLOSE_MODAL_CREATE:
      return { ...state, createModal: false };
    default:
      return state;
  }
};

export default reducer;

//= ===========================ACTION CREATORS==================================//

export const openModalCreate = (): { type: ModalTypes.OPEN_MODAL_CREATE } =>
  action(ModalTypes.OPEN_MODAL_CREATE);

export const closeModalCreate = (): { type: ModalTypes.CLOSE_MODAL_CREATE } =>
  action(ModalTypes.CLOSE_MODAL_CREATE);
