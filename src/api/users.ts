import { API_ENDPOINTS_ENUM } from '@/constants/api';
import { api } from './axiosInstance';
import { UserRolesEnum, type IUser } from '@/types/user';

export async function fetchUserByUsername(username: string): Promise<IUser | null> {
  const { data } = await api.get<IUser[]>(API_ENDPOINTS_ENUM.USERS, { params: { username } });

  if (data.length === 0) return null;

  const user = data[0];

  // hardcode admin roke for user with id = 1
  return {
    ...user,
    role: user.id === 1 ? UserRolesEnum.ADMIN : UserRolesEnum.USER,
  };
}

export async function fetchAllUsers(): Promise<IUser[]> {
  const { data } = await api.get<IUser[]>(API_ENDPOINTS_ENUM.USERS);
  return data;
}
