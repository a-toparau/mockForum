import { useAuthStore } from '@/store/auth';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { StyledLink, StyledWrapper } from './Sidebar.styles';
import { NAV_ITEMS } from '@/constants/navItems';

export const Sidebar = () => {
  const { user } = useAuthStore();
  const role = user?.role;

  const displayedItems = NAV_ITEMS.filter(({ roles }) => !roles || (role && roles.includes(role)));

  return (
    <StyledWrapper>
      {user && (
        <List>
          {displayedItems.map(({ label, path, icon: Icon }) => (
            <StyledLink to={path} key={path}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </StyledLink>
          ))}
        </List>
      )}
    </StyledWrapper>
  );
};
