import { connect } from 'react-redux';
import listRedux from '../../redux/list';
import { Router } from '../../routes';

function mapStateToProps(store) {
  const itemCreated = store.getIn(['list', 'itemCreated']);

  return {
    itemCreated
  };
}

function mapDispatchToProps(dispatch) {
  const { setItemCreated } = listRedux.actions;

  return {
    submitSuccess: () => {
      dispatch(setItemCreated(false));
      return Router.pushRoute('/');
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
