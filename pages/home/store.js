import { connect } from 'react-redux';

import listRedux from '../../redux/list';

function mapStateToProps(store) {
  const list = store.getIn(['list', 'list']).toJS();

  return {
    list
  };
}

function mapDispatchToProps(dispatch) {
  const { getListData, createListData } = listRedux.actions;

  return {
    getList: () => dispatch(getListData()),
    createList: () => dispatch(createListData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
