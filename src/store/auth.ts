import type { IUser } from '@/types/user';
import { persist, devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { useNotificationStore } from './notification';
import { fetchUserByUsername } from '@/api/users';

interface IAuthState {
  user: IUser | null;
  authLoading: boolean;
  login: (username: string) => Promise<void>;
  logout: VoidFunction;
}

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        authLoading: false,

        login: async (username) => {
          const { showNotification } = useNotificationStore.getState();
          set({ authLoading: true }, false, 'authloading');

          try {
            const user = await fetchUserByUsername(username);
            if (user) {
              set({ user }, false, 'login');
              showNotification('success', `Hi, ${user.username}! Glad to see you.`);
            } else {
              showNotification('error', 'User not found');
            }
          } catch {
            showNotification('error', 'Unexpected error during authorixation.');
          } finally {
            set({ authLoading: false }, false, 'authloading');
          }
        },

        logout: () => {
          set({ user: null }, false, 'logout');
          const { showNotification } = useNotificationStore.getState();
          showNotification('warning', `You're logout. Have a good day!`);
        },
      }),
      { name: 'authStorage' },
    ),
    { name: 'authStorage' },
  ),
);
