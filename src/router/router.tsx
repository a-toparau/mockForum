import { APP_PATHS_ENUM } from '@/constants/appPath';
import { AppLayout } from '@/pages/AppLayout/AppLayout';
import { HomePage } from '@/pages/HomePage/HomePage';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import { PageLayout } from '@/pages/PageLayout/PageLayout';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { UserRolesEnum } from '@/types/user';
import { UserPage } from '@/pages/UserPage/UserPage';
import PostPage from '@/pages/PostPage/PostPage';
import { MyPostsPage } from '@/pages/MyPostsPage/MyPostsPage';
import { FavoritePage } from '@/pages/FavoritePage/FavoritePage';

export const router = createBrowserRouter([
  {
    path: APP_PATHS_ENUM.HOME,
    Component: AppLayout,
    children: [
      {
        path: APP_PATHS_ENUM.HOME,
        Component: PageLayout,
        children: [
          { path: APP_PATHS_ENUM.HOME, Component: HomePage },
          { path: APP_PATHS_ENUM.POST, Component: PostPage },
          {
            path: APP_PATHS_ENUM.MY_POSTS,
            element: (
              <ProtectedRoute
                allowedRoles={[UserRolesEnum.ADMIN, UserRolesEnum.USER]}
                element={<MyPostsPage />}
              />
            ),
          },
          {
            path: APP_PATHS_ENUM.FAVORITES,
            element: (
              <ProtectedRoute
                allowedRoles={[UserRolesEnum.ADMIN, UserRolesEnum.USER]}
                element={<FavoritePage />}
              />
            ),
          },
          { path: APP_PATHS_ENUM.USERS, Component: UserPage },
        ],
      },
      { path: APP_PATHS_ENUM.LOGIN, Component: LoginPage },
      {
        path: APP_PATHS_ENUM.LOGIN,
        element: (
          <ProtectedRoute
            allowedRoles={[UserRolesEnum.ADMIN, UserRolesEnum.USER]}
            element={<UserPage />}
          />
        ),
      },
    ],
  },
]);
