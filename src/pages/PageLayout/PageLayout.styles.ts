import { theme } from '@/theme/theme';
import { Box, styled } from '@mui/material';

export const StyledWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  gap: 2,
  width: '100%',
  maxWidth: '100vw',
  backgroundColor: theme.palette.primitives.neutral[10],
});

export const StyledNavigation = styled(Box)({
  flex: '0 0 200px',
  minHeight: 'calc(100vh - 84px)',
});

export const StyledContent = styled(Box)({
  flex: '1 1 auto',
  minWidth: 750,
  maxWidth: 900,
  paddingTop: 20,
});

export const StyledInfo = styled(Box)({
  flex: '0 0 200px',
  backgroundColor: theme.palette.primitives.neutral[10],
});
