import {
  Box,
  Button,
  ListItemButton,
  TextField,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = ({
  setEmail,
  setPassword,
  navigate,
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
          sx={{ ml: 1, color: blue[700], borderRadius: 5 }}
          onClick={() => navigate('/register')}
        >
          <Typography>Регистрация</Typography>
        </ListItemButton>
        {/* <Button variant='text' size='small' sx={{ ml: 1 }}>
          Регистрация
        </Button> */}
      </Box>
    </>
  );
};

export default LoginPage;
