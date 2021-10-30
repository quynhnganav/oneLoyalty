import * as React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import { AuthProvider } from './src/store';
import AppRouter from "./src/screens/app";
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import redeemVoucher from './src/store/reducer/redeemVoucher';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const rootReducers = combineReducers({
    wallet: redeemVoucher
  });
  const store = createStore(rootReducers, applyMiddleware(ReduxThunk));
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <AuthProvider>
        <AppRouter />
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <StatusBar /> */}

      </AuthProvider>
      </Provider>
    );
  }
}
