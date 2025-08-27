import type { AlertProps } from '@mui/material';

export type TNotificationType = 'warning' | 'success' | 'error';

export interface INotification {
  type: AlertProps['severity'];
  msg: string;
}
