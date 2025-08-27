import { UserRolesEnum } from '@/types/user';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { SvgIconTypeMap } from '@mui/material';
import { APP_PATHS_ENUM } from './appPath';

interface INavItem {
  label: string;
  path: APP_PATHS_ENUM;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  roles?: UserRolesEnum[];
}

export const NAV_ITEMS: INavItem[] = [
  {
    label: 'Home',
    path: APP_PATHS_ENUM.HOME,
    icon: HomeIcon,
  },
  {
    label: 'My Posts',
    path: APP_PATHS_ENUM.MY_POSTS,
    icon: ArticleIcon,
  },
  {
    label: 'My Favorites',
    path: APP_PATHS_ENUM.FAVORITES,
    icon: StarIcon,
  },
  {
    label: 'Users',
    path: APP_PATHS_ENUM.USERS,
    icon: GroupIcon,
    roles: [UserRolesEnum.ADMIN],
  },
];
