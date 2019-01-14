import { connect } from 'react-redux';

function mapStateToProps(store) {
  const list = store.getIn(['list', 'list']).toJS();

  return {
    list
  };
}

export default connect(
  mapStateToProps,
  null
);
