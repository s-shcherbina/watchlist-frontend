import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

const PrivateRoute = () => {
  // const auth = true;
  const auth = useAuth();
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
