import { connect } from 'react-redux';

import listRedux from '../../redux/list';

function mapStateToProps(store) {
  const list = store.getIn(['list', 'list']).toJS();

  return {
    list
  };
}

function mapDispatchToProps(dispatch) {
  const { getListData } = listRedux.actions;

  return {
    getList: () => dispatch(getListData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
