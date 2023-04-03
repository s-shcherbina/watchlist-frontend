export interface ISidebarProps {
  isNonMobile: boolean;
  drawerWidth: number;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
