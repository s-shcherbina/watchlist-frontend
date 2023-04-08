import {
  Box,
  Button,
  ListItemButton,
  TextField,
  Typography,
} from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const Login: React.FC<IPropsLogin> = ({
  navigate,
  register,
  errors,
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
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email', { required: 'Это обязательное поле' })}
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
        {...register('password', {
          required: 'Это обязательное поле',
          minLength: 4,
        })}
        helperText={errors.password ? `${errors.password.message}` : ''}
      />
      <Button
        type='submit'
        sx={{
          display: 'flex',
          alignSelf: 'center',
          my: 2,
          width: '60%',
          borderRadius: 5,
        }}
        variant='contained'
      >
        Войти
      </Button>
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
