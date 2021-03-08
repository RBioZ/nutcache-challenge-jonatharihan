/* eslint-disable camelcase */
/* eslint-disable no-shadow */
import { Reducer } from 'redux';
import { action } from 'typesafe-actions';
//= ============================ACTION TYPES===================================//

export enum ModalTypes {
  OPEN_MODAL_CREATE = '@modal/OPEN_MODAL_CREATE',
  CLOSE_MODAL_CREATE = '@modal/CLOSE_MODAL_CREATE',

  OPEN_MODAL_DELETE = '@modal/OPEN_MODAL_DELETE',
  CLOSE_MODAL_DELETE = '@modal/CLOSE_MODAL_DELETE',

  OPEN_MODAL_EDIT = '@modal/OPEN_MODAL_EDIT',
  CLOSE_MODAL_EDIT = '@modal/CLOSE_MODAL_EDIT',
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

export interface ModalState {
  readonly createModal: boolean;
  readonly deleteModal: boolean;
  readonly editModal: boolean;
  readonly employee: IEmployee | null;
}

//= ===============================REDUCER======================================//

const INITIAL_STATE: ModalState = {
  createModal: false,
  deleteModal: false,
  editModal: false,
  employee: null,
};

const reducer: Reducer<ModalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalTypes.OPEN_MODAL_CREATE:
      return { ...state, createModal: true };
    case ModalTypes.CLOSE_MODAL_CREATE:
      return { ...state, createModal: false };
    case ModalTypes.OPEN_MODAL_DELETE:
      return { ...state, deleteModal: true, employee: action.payload.employee };
    case ModalTypes.CLOSE_MODAL_DELETE:
      return { ...state, deleteModal: false };
    case ModalTypes.OPEN_MODAL_EDIT:
      return { ...state, editModal: true, employee: action.payload.employee };
    case ModalTypes.CLOSE_MODAL_EDIT:
      return { ...state, editModal: false };
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

export const openModalDelete = (
  employee: IEmployee,
): { type: ModalTypes.OPEN_MODAL_DELETE } =>
  action(ModalTypes.OPEN_MODAL_DELETE, { employee });

export const closeModalDelete = (): { type: ModalTypes.CLOSE_MODAL_DELETE } =>
  action(ModalTypes.CLOSE_MODAL_DELETE);

export const openModalEdit = (
  employee: IEmployee,
): { type: ModalTypes.OPEN_MODAL_EDIT } =>
  action(ModalTypes.OPEN_MODAL_EDIT, { employee });

export const closeModalEdit = (): { type: ModalTypes.CLOSE_MODAL_EDIT } =>
  action(ModalTypes.CLOSE_MODAL_EDIT);
