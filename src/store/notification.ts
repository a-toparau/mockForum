import type { INotification, TNotificationType } from '@/types/notification';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface INotificationState {
  notification: INotification | null;
  showNotification: (type: TNotificationType, msg: string) => void;
  clearNotification: () => void;
}

export const useNotificationStore = create<INotificationState>()(
  devtools((set) => ({
    notification: null,
    showNotification: (type, msg) =>
      set({ notification: { type, msg } }, false, 'showNotification'),
    clearNotification: () => set({ notification: null }, false, 'clearNotification'),
  })),
);
