// eslint-disable-next-line no-multi-assign
const routes = (module.exports = require('next-routes')());

routes
  .add('index', '/')
  .add('todo', '/todo')
  .add('createItem', '/create');
