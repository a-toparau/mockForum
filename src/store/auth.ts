import type { IUser } from '@/types/user';
import { persist, devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface IAuthState {
  user: IUser | null;
  login: (user: IUser) => void;
  logout: VoidFunction;
}

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        login: (user) => set({ user }, false, 'login'),
        logout: () => set({ user: null }, false, 'logout'),
      }),
      { name: 'authStorage' },
    ),
    { name: 'authStorage' },
  ),
);
