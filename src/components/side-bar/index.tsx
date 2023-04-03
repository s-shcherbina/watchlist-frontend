import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ISidebarProps } from '../../common/types/side-bar';
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import FlexBetween from '../flex-between';

const SideBar: FC<ISidebarProps> = ({
  isNonMobile,
  drawerWidth,
  isOpen,
  setIsOpen,
}): JSX.Element => {
  const [active, setActive] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

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
              // backgroundColor: theme.palette.action.disabled,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <FlexBetween>
            <Box display='flex' alignItems='center' gap={2}>
              {/* <img src={Logo} alt='Logo' /> */}
              <Typography variant='h6'>Demo</Typography>
              {isNonMobile && (
                <IconButton onClick={() => setIsOpen(!isOpen)}>
                  <ChevronLeftOutlined />
                </IconButton>
              )}
            </Box>
          </FlexBetween>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
