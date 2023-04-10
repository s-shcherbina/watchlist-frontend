import { ReactNode } from 'react';

export interface ISidebarProps {
  isNonMobile: boolean;
  drawerWidth: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export interface ISideBarButton {
  pathname: string;
  path: string;
  icon: ReactNode;
  name: string;
  click: () => void;
}
