import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import size from 'lodash/size';

import ItemList from '../../src/components/itemList';
import TableContent from '../../src/components/tableContent';

import listRedux from '../../redux/list';

import withStore from './store';

import css from './styles.scss';

const { getListData } = listRedux.actions;

class Home extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(getListData());
  }

  render() {
    const { list } = this.props;
    const params = [
      { id: 1, name: '#' },
      { id: 2, name: 'Name' },
      { id: 3, name: 'Description' },
      { id: 4, name: 'Status' },
      { id: 5, name: 'Created Date' },
      { id: 6, name: 'Actions' }
    ];

    return (
      <div className={css.view}>
        <h1 className={css.title}>Dashboard</h1>
        <h5 className={css.subtitle}>See all the lists</h5>
        {size(list) > 0 ? (
          <TableContent params={params}>
            {map(list, item => (
              <ItemList
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                status={item.status}
                createDate={item.createdate}
              />
            ))}
          </TableContent>
        ) : (
          <div>No hay listas</div>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  list: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default withStore(Home);
