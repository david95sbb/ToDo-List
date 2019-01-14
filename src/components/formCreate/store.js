import { connect } from 'react-redux';

import listRedux from '../../../redux/list';

function mapDispatchToProps(dispatch) {
  const { createListData } = listRedux.actions;

  return {
    submitCreate: values =>
      dispatch(
        createListData({
          ...values.toJS(),
          status: 'toDo',
          createDate: '12/12/2021'
        })
      )
  };
}

export default connect(
  null,
  mapDispatchToProps
);
