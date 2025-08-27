import logoIcon from '@/assets/icons/logo.svg';
import { StyledHeaderLink, StyledHeaderLogo, StyledHeaderWrapper } from './Header.styles';
import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { APP_PATHS_ENUM } from '@/constants/appPath';
import { useAuthStore } from '@/store/auth';

export const Header = () => {
  const { user, logout } = useAuthStore();
  const { pathname } = useLocation();
  console.log('pathname: ', pathname);
  const isLoginVisable = pathname !== APP_PATHS_ENUM.LOGIN && !user;

  return (
    <StyledHeaderWrapper>
      <StyledHeaderLink to={APP_PATHS_ENUM.HOME}>
        <Box display="flex" gap={2}>
          <StyledHeaderLogo src={logoIcon} alt="logo" />
          <Typography variant="h5">mockForum</Typography>
        </Box>
      </StyledHeaderLink>
      {isLoginVisable && (
        <Button variant="contained" component={Link} to={APP_PATHS_ENUM.LOGIN}>
          Log in
        </Button>
      )}

      {user && (
        <Button variant="contained" color="secondary" onClick={logout}>
          Log out
        </Button>
      )}
    </StyledHeaderWrapper>
  );
};
