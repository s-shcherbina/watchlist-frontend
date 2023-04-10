import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISideBarButton } from '../../common/types/side-bar';

const SideBarButton: FC<ISideBarButton> = ({
  pathname,
  path,
  icon,
  name,
  click,
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <ListItem>
      <ListItemButton
        sx={{
          borderRadius: 1,
          bgcolor: pathname === path ? '#1900D5 !important' : '',
          color: pathname === path ? '#FFFFFF !important' : '',
          '&:hover': {
            bgcolor: '#1900D5 !important',
            color: '#FFF',
            '& .MuiSvgIcon-root': {
              color: '#FFF !important',
            },
          },
        }}
        onClick={() => {
          navigate(path);
          click();
        }}
      >
        <ListItemIcon
          sx={{
            color: pathname === path ? '#FFFFFF' : '#7C7C7C',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarButton;
