import { Box } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import LoginPage from './login';
import RegisterPage from './register';
import './style.css';

const AuthRootPage: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (pathname === '/login') {
      try {
        const userData = { email, password };
        const user = await instance.post('auth/login', userData);
        dispatch(login(user.data));
        navigate('/');
      } catch (e: any) {
        return e.response.data.message;
      }
    }
    if (pathname === '/register')
      if (password === confirmPassword) {
        try {
          const newUserData = { firstName: name, username, email, password };
          const newUser = await instance.post('auth/register', newUserData);
          dispatch(login(newUser.data));
          navigate('/');
        } catch (e: any) {
          return e.message;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch).message;
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='root'>
        <Box
          display='flex'
          flexDirection='column'
          margin='auto'
          borderRadius={8}
          boxShadow={'-3px -2px 20px 1px #202020'}
          sx={{ p: { xs: 1, sm: 5 }, width: { xs: 300, sm: 500, md: 600 } }}
        >
          {pathname === '/login' ? (
            <LoginPage
              setEmail={setEmail}
              setPassword={setPassword}
              navigate={navigate}
            />
          ) : pathname === '/register' ? (
            <RegisterPage
              setName={setName}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </div>
    </form>
  );
};

export default AuthRootPage;
