import { Box, ListItemButton, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import AuthButton from '../../../components/helpers/auth-button';

const Login: React.FC<IPropsLogin> = ({
  navigate,
  register,
  errors,
  loading,
}): JSX.Element => {
  return (
    <>
      <Typography variant='h4' textAlign='center'>
        Авторизация
      </Typography>
      <Typography variant='body1' sx={{ m: 1, textAlign: 'center' }}>
        Введите ваш логин и пароль
      </Typography>
      <TextField
        error={!!errors.email}
        size='small'
        margin='normal'
        label='Email'
        placeholder='Введите Ваш email'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        {...register('email')}
        helperText={errors.email ? `${errors.email.message}` : ''}
      />
      <TextField
        error={!!errors.password}
        size='small'
        type='password'
        margin='normal'
        label='Пароль'
        placeholder='Введите Ваш пароль'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        {...register('password')}
        helperText={errors.password ? `${errors.password.message}` : ''}
      />
      <AuthButton type='submit' variant='contained' loading={loading}>
        Войти
      </AuthButton>
      <Box
        sx={{
          display: { sm: 'flex' },
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <Typography variant='body1'>У Вас нет аккаунта?</Typography>
        <ListItemButton
          sx={{ ml: 1, borderRadius: 5 }}
          onClick={() => navigate('/register')}
        >
          <Typography color={'primary'}>Регистрация</Typography>
        </ListItemButton>
      </Box>
    </>
  );
};

export default Login;
