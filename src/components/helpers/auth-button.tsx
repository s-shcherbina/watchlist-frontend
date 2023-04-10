import { styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const AuthButton = styled(LoadingButton)({
  display: 'flex',
  alignSelf: 'center',
  width: '60%',
  borderRadius: '2.5rem',
  margin: '1rem',
});

export default AuthButton;
