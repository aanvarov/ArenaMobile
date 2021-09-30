/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store, {persister} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persister={persister}>
        <App />
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
