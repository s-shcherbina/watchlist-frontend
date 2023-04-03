import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, FC, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import AuthRootPage from './pages/auth';
import HomePage from './pages/home';
import PrivateRoute from './utils/router/private-route';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App: FC = (): JSX.Element => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<HomePage />} />
            </Route>
            <Route path='login' element={<AuthRootPage />} />
            <Route path='register' element={<AuthRootPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
