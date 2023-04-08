import { Paper } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import Login from './login';
import Register from './register';
import { useForm } from 'react-hook-form';
import './style.css';

const AuthRootPage: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log('errors', errors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  // const handleSubmitForm = async (e: { preventDefault: () => void }) => {
  // e.preventDefault();

  const handleSubmitForm = async (data: any) => {
    console.log('data', data);

    if (pathname === '/login') {
      try {
        const userData = { email: data.email, password: data.password };
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
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className='root'>
        <Paper
          elevation={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            p: { xs: 1, sm: 5 },
            width: { xs: 300, sm: 500, md: 600 },
            borderRadius: 6,
          }}
        >
          {pathname === '/login' ? (
            <Login navigate={navigate} register={register} errors={errors} />
          ) : pathname === '/register' ? (
            <Register
              setName={setName}
              setUsername={setUsername}
              setConfirmPassword={setConfirmPassword}
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : null}
        </Paper>
      </div>
    </form>
  );
};

export default AuthRootPage;
