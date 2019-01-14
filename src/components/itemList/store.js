import { connect } from 'react-redux';
import listRedux from '../../../redux/list';

function mapDispatchToProps(dispatch) {
  const { updateStatusForItem } = listRedux.actions;

  return {
    updateStatus: (id, status) => dispatch(updateStatusForItem(id, status))
  };
}

export default connect(
  null,
  mapDispatchToProps
);
