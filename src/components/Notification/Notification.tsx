import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNotificationStore } from '@/store/notification';

export const Notification = () => {
  const { notification, clearNotification } = useNotificationStore();

  return (
    <Snackbar
      open={!!notification}
      autoHideDuration={4000}
      onClose={clearNotification}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={clearNotification} severity={notification?.type} variant="filled">
        {notification?.msg}
      </Alert>
    </Snackbar>
  );
};
