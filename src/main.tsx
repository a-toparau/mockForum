import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { Notification } from './components/Notification/Notification';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <Notification />
    </ThemeProvider>
  </StrictMode>,
);
