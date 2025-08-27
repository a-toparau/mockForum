import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { StyledContent, StyledInfo, StyledNavigation, StyledWrapper } from './PageLayout.styles';

export const PageLayout = () => (
  <StyledWrapper>
    <StyledNavigation>
      <Sidebar />
    </StyledNavigation>
    <StyledContent>
      <Outlet />
    </StyledContent>
    <StyledInfo />
  </StyledWrapper>
);
