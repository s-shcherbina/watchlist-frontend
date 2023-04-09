import { Box, Paper, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import Login from './login';
import Register from './register';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup';

const AuthRootPage: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(pathname === '/login' ? LoginSchema : RegisterSchema),
  });

  const handleSubmitForm = async (data: any) => {
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
      if (data.password === data.confirmPassword) {
        try {
          const newUserData = {
            firstName: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
          };
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
      <Box
        display='flex'
        width='100vw'
        height='100vh'
        justifyContent='center'
        alignItems='center'
      >
        <Paper
          elevation={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: { xs: 1, sm: 5 },
            width: { xs: 300, sm: 500, md: 600 },
            borderRadius: 6,
          }}
        >
          {pathname === '/login' ? (
            <Login navigate={navigate} register={register} errors={errors} />
          ) : pathname === '/register' ? (
            <Register navigate={navigate} register={register} errors={errors} />
          ) : null}
        </Paper>
      </Box>
    </form>
  );
};

export default AuthRootPage;
