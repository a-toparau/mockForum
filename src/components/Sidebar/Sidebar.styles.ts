import { theme } from '@/theme/theme';
import { Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled(Box)({
  width: 220,
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  paddingTop: 20,
  height: '100%',
});

export const StyledLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&.active > div': {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.main,
    fontWeight: 600,
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
}));
