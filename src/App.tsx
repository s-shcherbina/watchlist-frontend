import { Route, Routes } from 'react-router-dom';
import AuthRootPage from './pages/auth';
import HomePage from './pages/home';
import PrivateRoute from './utils/router/private-route';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='login' element={<AuthRootPage />} />
        <Route path='register' element={<AuthRootPage />} />
      </Routes>
    </div>
  );
};

export default App;
