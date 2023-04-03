import {
  Box,
  Button,
  ListItemButton,
  TextField,
  Typography,
} from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = ({
  setName,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  navigate,
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
        size='small'
        margin='normal'
        label='Имя'
        placeholder='Введите ваше имя'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        size='small'
        margin='normal'
        label='Username'
        placeholder='Введите Ваш username'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        size='small'
        margin='normal'
        label='Email'
        placeholder='Введите Ваш email'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        size='small'
        type='password'
        margin='normal'
        label='Пароль'
        placeholder='Введите Ваш пароль'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        size='small'
        type='password'
        margin='normal'
        label='Пароль'
        placeholder='Подтвердите пароль'
        sx={{
          borderRadius: 5,
          '& fieldset': { borderRadius: 5 },
        }}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        type='submit'
        sx={{
          display: 'flex',
          alignSelf: 'center',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
          borderRadius: 5,
        }}
        variant='contained'
      >
        Регистрация
      </Button>
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

export default RegisterPage;
