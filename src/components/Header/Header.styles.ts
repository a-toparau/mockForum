import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledHeaderWrapper = styled(Box)(({ theme: { palette } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 84,
  backgroundColor: palette.primitives.neutral[0],
  padding: '23px 50px',
  boxShadow: `0 0 5px ${palette.primitives.neutral[40]}`,
}));

export const StyledHeaderLogo = styled('img')({
  height: 30,
  width: 25,
});

export const StyledHeaderLink = styled(Link)(({ theme: { palette } }) => ({
  textDecoration: 'none',
  color: palette.primitives.neutral[100],
}));
