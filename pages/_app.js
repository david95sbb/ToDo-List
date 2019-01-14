import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import { compose } from 'recompose';

import withRedux from '../HOCs/withRedux';
import reducers from '../redux/reducers';
import sagas from '../redux/sagas';

import AppWrapper from '../src/containers/appWrapper';

const customReduxMiddlewares = [];

class ToDoList extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </Provider>
      </Container>
    );
  }
}

const enhance = compose(withRedux(reducers, sagas, customReduxMiddlewares));

export default enhance(ToDoList);
