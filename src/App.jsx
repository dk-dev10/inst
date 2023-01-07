import { Provider } from 'react-redux';

import { store } from './redux/store';
import PageRoutes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
          <PageRoutes />
    </Provider>
  );
};

export default App;
