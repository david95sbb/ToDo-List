import React from 'react';

import css from './styles.scss';
import { Link } from '../../../routes';

const Header = () => (
  <div className={css.contentItem}>
    <div>
      <Link route="/">
        <a>DashBoard</a>
      </Link>
    </div>
    <div>
      <Link route="/create">
        <a>Create</a>
      </Link>
    </div>
    <div>
      <Link route="/todo">
        <a>To Do</a>
      </Link>
    </div>
    <div>
      <Link route="/done">
        <a>Done</a>
      </Link>
    </div>
    <div>
      <Link route="/delete">
        <a>Deleted</a>
      </Link>
    </div>
  </div>
);

export default Header;
