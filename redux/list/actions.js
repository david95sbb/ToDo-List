import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getListData: null,
  setListData: ['list']
});

export const Actions = Types;
export default Creators;
