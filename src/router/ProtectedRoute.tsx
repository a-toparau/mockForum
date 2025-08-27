import { useAuthStore } from '@/store/auth';
import { Navigate } from 'react-router-dom';
import type { UserRolesEnum } from '@/types/user';
import type { ReactNode } from 'react';

interface IProps {
  allowedRoles?: UserRolesEnum[];
  element: ReactNode;
}

export const ProtectedRoute = ({ allowedRoles, element }: IProps) => {
  const userRole = useAuthStore().user?.role;
  const hasUserAccess = !allowedRoles || (userRole && allowedRoles.includes(userRole));

  // TODO: add 404 and adjust layout. outlet?

  return hasUserAccess ? <>{element}</> : <Navigate to="/" replace />;
};
