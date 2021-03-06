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

class Done extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(getListData());
  }

  render() {
    const { list, goToCreate } = this.props;
    const params = [
      { id: 1, name: '#' },
      { id: 2, name: 'Name' },
      { id: 3, name: 'Description' },
      { id: 4, name: 'Status' },
      { id: 5, name: 'Created Date' },
      { id: 6, name: 'Actions' }
    ];
    let count = 0;

    return (
      <div className={css.view}>
        <h1 className={css.title}>To Do</h1>
        <h5 className={css.subtitle}>View items in To Do status</h5>
        {size(list) > 0 && (
          <div
            role="button"
            onKeyPress={() => null}
            tabIndex={0}
            className={css.addItem}
            onClick={() => goToCreate()}
          >
            Create item +
          </div>
        )}
        {size(list) > 0 ? (
          <TableContent params={params}>
            {map(list, item => {
              count += 1;
              return (
                <ItemList
                  key={count}
                  id={count}
                  name={item.name}
                  description={item.description}
                  status={item.status}
                  createDate={item.createDate}
                />
              );
            })}
          </TableContent>
        ) : (
          <div className={css.contentEmpty}>
            <div className={css.textEmpty}>
              Sorry, there is not Todo items, but you can create one to start
            </div>
            <button
              type="button"
              className={css.buttonSave}
              onClick={() => goToCreate()}
            >
              Create item
            </button>
          </div>
        )}
      </div>
    );
  }
}

Done.propTypes = {
  list: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  goToCreate: PropTypes.func.isRequired
};

export default withStore(Done);
