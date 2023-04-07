import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ISidebarProps } from '../../common/types/side-bar';
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
  useTheme,
} from '@mui/material';
import { navMenu } from '../../common/moks';
import Logo from '../../assets/logo.png';
import SideBarButton from '../helpers/side-bar-button';

const SideBar: FC<ISidebarProps> = ({
  isNonMobile,
  drawerWidth,
  isOpen,
  setIsOpen,
}): JSX.Element => {
  // const [active, setActive] = useState('');
  const { pathname } = useLocation();
  const theme = useTheme();

  // useEffect(() => {
  //   setActive(pathname);
  // }, [pathname]);

  return (
    <Box component='nav'>
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{
            border: 'solid',
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.text.secondary,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              px: 2,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <img src={Logo} alt='Logo' />

              <Typography
                variant='h4'
                color={`${theme.palette.text.primary}`}
                fontWeight='bold'
              >
                Crypto
              </Typography>
            </Box>
            {isNonMobile && (
              <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ m: 'auto' }}>
                <ChevronLeftOutlined />
              </IconButton>
            )}
          </Box>
          <List>
            {navMenu.map((item) => (
              <SideBarButton
                key={item.id}
                pathname={pathname}
                path={item.path}
                icon={item.icon}
                name={item.name}
              />
            ))}
            <Divider sx={{ mt: 3 }} />
            <SideBarButton
              pathname={pathname}
              path={'/login'}
              icon={<LogoutOutlined />}
              name={'Выход'}
            />
          </List>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
