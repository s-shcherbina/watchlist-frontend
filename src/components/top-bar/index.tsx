import {
  Brightness4,
  Brightness7,
  Notifications,
  Search,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../App';
import { useAppSelector } from '../../utils/hooks';

const TopBar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { user } = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          py: 2,
        }}
      >
        <Typography variant='h6'>Welcome, {user.firstName}</Typography>

        <Box display='flex'>
          <IconButton onClick={colorMode.toggleColorMode} sx={{ mr: 0.5 }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton sx={{ mr: 0.5 }}>
            <Notifications />
          </IconButton>
          <Box>
            <Divider orientation='vertical' sx={{ mr: 2 }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              bgcolor: theme.palette.action.disabledBackground,
              borderRadius: 1,
            }}
          >
            <IconButton
              sx={{
                ':hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Search />
            </IconButton>
            <InputBase placeholder='Поиск' />
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default TopBar;
