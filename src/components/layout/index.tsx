import { Box, Stack, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../side-bar';
import TopBar from '../top-bar';

const Layout: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isNonMobile = useMediaQuery('(min-width:760px)');

  return pathname === '/login' || pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <Box display={isNonMobile ? 'flex' : 'block'}>
      <SideBar
        isNonMobile={isNonMobile}
        drawerWidth={250}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Stack flexGrow={1}>
        <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </Stack>
    </Box>
  );
};

export default Layout;
