import {
  Brightness4,
  Brightness7,
  MenuOutlined,
  Notifications,
  Search,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../App';
import { useAppSelector } from '../../utils/hooks';

const TopBar = ({ isOpen, setIsOpen }: any) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { user } = useAppSelector((state) => state.auth.user);

  return (
    <>
      <AppBar
        position='static'
        sx={{
          background: `${theme.palette.background.paper} !important`,
          boxShadow: 'none !important',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            // px: 4,
            // py: 2,
          }}
        >
          <Box display='flex' gap={1} alignItems='center'>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MenuOutlined />
            </IconButton>
            <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
              Welcome, {user.firstName}
            </Typography>
          </Box>
          <Box display='flex'>
            <IconButton onClick={colorMode.toggleColorMode} sx={{ mr: 0.5 }}>
              {theme.palette.mode === 'dark' ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
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
                bgcolor: theme.palette.action.selected,
                borderRadius: 1,
                width: 300,
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
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

export default TopBar;
