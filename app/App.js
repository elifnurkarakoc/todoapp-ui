/** Libraries */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/** Routes */
import RootRouter from 'Routes';

/** Store */
import store from 'Store/store';

function App() {
  console.log(window.TODOConfig);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
