import { Box, Typography } from '@mui/material';
import { AuthForm } from '@/components/AuthForm/AuthForm';
import {
  StyledFormWrapper,
  StyledImgContainer,
  StyledInfo,
  StyledWrapper,
} from './LoginPage.styles';
import { useAuthStore } from '@/store/auth';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const { user } = useAuthStore();

  return user ? (
    <Navigate to="/" replace />
  ) : (
    <StyledWrapper>
      <StyledInfo>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enter your credentials.
          </Typography>

          <StyledFormWrapper>
            <AuthForm />
          </StyledFormWrapper>
        </Box>
      </StyledInfo>
      <StyledImgContainer />
    </StyledWrapper>
  );
};
