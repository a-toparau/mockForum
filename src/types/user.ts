export enum UserRolesEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  tg: string;
  role: UserRolesEnum;
}
