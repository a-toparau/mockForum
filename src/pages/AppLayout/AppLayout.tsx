import { useAuthStore } from '@/store/auth';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Loader } from '@/components/Loader/Loader';
import { usePostsStore } from '@/store/posts';
import { StyledWrapper } from './AppLayout.styles';

export const AppLayout = () => {
  const postLoading = usePostsStore((state) => state.loading);
  const authLoading = useAuthStore((state) => state.authLoading);

  // TODO: add global loader
  const isLoading = postLoading || authLoading;

  return (
    <StyledWrapper>
      <Header />
      <Outlet />
      <Loader open={isLoading} />
    </StyledWrapper>
  );
};
