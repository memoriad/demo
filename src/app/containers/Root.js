import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import routes from '../routes';

const store = configureStore()

class Root extends React.Component {

  render() {
    return (
      <Provider store={store} key='provider'>
        {routes()}
      </Provider>
    );
  }

}

export default Root;
