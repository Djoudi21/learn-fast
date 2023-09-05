import 'react-native-gesture-handler';
import React from 'react';
import {persistor, store} from './src/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootStackRouter} from './src/routes/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/*<GestureHandlerRootView>*/}
        <NavigationContainer>
          <RootStackRouter />
        </NavigationContainer>
        {/*</GestureHandlerRootView>*/}
      </PersistGate>
    </Provider>
  );
}
