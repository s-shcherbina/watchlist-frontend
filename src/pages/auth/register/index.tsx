import { Box, ListItemButton, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import AuthButton from '../../../components/helpers/auth-button';

const Register: React.FC<IPropsLogin> = ({
  navigate,
  register,
  errors,
}): JSX.Element => {
  return (
    <>
      <Typography variant='h4' textAlign='center'>
        Регистрация
      </Typography>
      <Typography variant='body1' sx={{ m: 1, textAlign: 'center' }}>
        Введите данные для регистрации
      </Typography>
      <TextField
        error={!!errors.name}
        size='small'
        margin='normal'
        label='Имя'
        placeholder='Введите ваше имя'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        helperText={errors.name ? `${errors.name.message}` : ''}
        {...register('name')}
      />
      <TextField
        error={!!errors.username}
        size='small'
        margin='normal'
        label='Username'
        placeholder='Введите Ваш username'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        helperText={errors.username ? `${errors.username.message}` : ''}
        {...register('username')}
      />
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
        {...register('email')}
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
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
      />
      <TextField
        error={!!errors.confirmPassword}
        size='small'
        type='password'
        margin='normal'
        label='Пароль'
        placeholder='Подтвердите пароль'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ''
        }
        {...register('confirmPassword')}
      />
      <AuthButton type='submit' variant='contained'>
        Регистрация
      </AuthButton>
      <Box
        sx={{
          display: { sm: 'flex' },
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <Typography variant='body1'>У Вас ecть аккаунт?</Typography>
        <ListItemButton
          sx={{ ml: 1, borderRadius: 5 }}
          onClick={() => navigate('/login')}
        >
          <Typography color={'primary'}>Войти</Typography>
        </ListItemButton>
      </Box>
    </>
  );
};

export default Register;
