import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getListData: null,
  createListData: ['data'],
  updateStatusForItem: ['id', 'status'],
  setListData: ['list'],
  setItemCreated: ['status']
});

export const Actions = Types;
export default Creators;
