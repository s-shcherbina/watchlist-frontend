import { Box, Grid, Stack, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../side-bar';
import TopBar from '../top-bar';

const Layout: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const isNonMobile = useMediaQuery('(min-width:760px)');

  return pathname === '/login' || pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <Box
      display={isNonMobile ? 'flex' : 'block'}
      // justifyContent='space-between'
      width='100%'
      height='100%'
    >
      <SideBar
        isNonMobile={isNonMobile}
        drawerWidth={250}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Stack width='100%'>
        <TopBar />
        <Outlet />
      </Stack>
    </Box>
    // <>
    //   <Grid container spacing={1}>
    //     <Grid item md={3} sx={{ border: 'solid' }}>
    //       <SideBar
    //         isNonMobile={isNonMobile}
    //         drawerWidth={250}
    //         isOpen={isOpen}
    //         setIsOpen={setIsOpen}
    //       />
    //     </Grid>
    //     <Grid item xs={12} md={9} sx={{ border: 'solid' }}>
    //       <TopBar />
    //       <Outlet />
    //     </Grid>
    //   </Grid>
    // </>
  );
};

export default Layout;
