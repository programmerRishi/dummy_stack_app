import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';
import LibraryList from './components/LibraryList_ListView';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
    <Header headerText='Friends' />
    <LibraryList />
    </View>
    </Provider>
  );
};

export default App;
