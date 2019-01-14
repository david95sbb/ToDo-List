import { connect } from 'react-redux';
import filter from 'lodash/filter';
import size from 'lodash/size';

import listRedux from '../../redux/list';
import { Router } from '../../routes';

function mapStateToProps(store) {
  const list = store.getIn(['list', 'list']).toJS();

  return {
    list: size(list) > 0 && filter(list, item => item.status === 'done')
  };
}

function mapDispatchToProps(dispatch) {
  const { setItemCreated } = listRedux.actions;

  return {
    goToCreate: () => {
      dispatch(setItemCreated(false));
      return Router.pushRoute('/create');
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
