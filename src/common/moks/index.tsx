import {
  HomeOutlined,
  AutoGraphOutlined,
  MenuBookOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from '@mui/icons-material';

export const navMenu = [
  {
    name: 'Главная',
    icon: <HomeOutlined />,
    path: '/',
    id: 1,
  },
  {
    name: 'Избранное',
    icon: <AutoGraphOutlined />,
    path: '/watchlist',
    id: 2,
  },
  {
    name: 'Новости',
    icon: <MenuBookOutlined />,
    path: '/news',
    id: 3,
  },
  {
    name: 'Настройки',
    icon: <SettingsOutlined />,
    path: '/settings',
    id: 4,
  },
];

export const logout = {
  name: 'Выход',
  icon: <LogoutOutlined />,
  path: '/login',
};
