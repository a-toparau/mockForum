import { useAuthStore } from '@/store/auth';
import { UserRolesEnum } from '@/types/user';

export const HomePage = () => {
  const { user, login, logout } = useAuthStore();

  const onClick = () => {
    login({ id: 1, email: 'email', name: 'test', role: UserRolesEnum.USER, tg: 'tg' });
  };

  return (
    <>
      <h2>Home Page: {user?.name}</h2>
      <button onClick={onClick}>add test</button>
      <button onClick={logout}>logout</button>
    </>
  );
};
