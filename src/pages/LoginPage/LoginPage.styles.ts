import { Box, Paper, styled } from '@mui/material';
import loginImage from '@/assets/img/loginImg.webp';

export const StyledWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  height: `calc(100vh - 84px)`,
  overflow: 'hidden',
  flexDirection: 'row',
});

export const StyledInfo = styled(Box)(({ theme: { palette } }) => ({
  flex: '0 0 40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  backgroundColor: palette.background.default,
}));

export const StyledImgContainer = styled(Box)({
  flex: '0 0 60%',
  backgroundImage: `url(${loginImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const StyledFormWrapper = styled(Paper)({
  padding: 10,
  marginTop: 10,
});
