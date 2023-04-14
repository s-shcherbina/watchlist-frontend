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
import { FC, useContext } from 'react';
import { ColorModeContext } from '../../App';
import { ITopBarProps } from '../../common/types/top-bar';

const TopBar: FC<ITopBarProps> = ({
  isOpen,
  setIsOpen,
  isNonMobile,
}): JSX.Element => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

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
          }}
        >
          <Box display='flex' gap={1} alignItems='center'>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <MenuOutlined />
            </IconButton>
            <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
              Welcome, {localStorage.getItem('name')}
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
                border: `1px solid ${theme.palette.divider}`,
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
