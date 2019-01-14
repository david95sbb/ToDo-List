import { connect } from 'react-redux';
import listRedux from '../../redux/list';
import { Router } from '../../routes';

function mapStateToProps(store) {
  const list = store.getIn(['list', 'list']).toJS();

  return {
    list
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
