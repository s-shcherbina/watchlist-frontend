import { Box, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import Login from './login';
import Register from './register';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { FieldValues } from 'react-hook-form';
import { loginUser, registerUser } from '../../store/thunks/auth-thunks';
import { ILoginData, IRegisterData } from '../../common/types/auth';

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

  const loading = useAppSelector((state) => state.auth.isLoading);

  const handleSubmitForm = async (data: FieldValues) => {
    if (pathname === '/login') {
      try {
        await dispatch(loginUser(data as ILoginData));
        navigate('/');
      } catch (e: any) {
        return e.response.data.message;
      }
    }
    if (pathname === '/register')
      if (data.password === data.confirmPassword) {
        try {
          await dispatch(registerUser(data as IRegisterData));
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
            <Login
              navigate={navigate}
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : pathname === '/register' ? (
            <Register
              navigate={navigate}
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : null}
        </Paper>
      </Box>
    </form>
  );
};

export default AuthRootPage;
