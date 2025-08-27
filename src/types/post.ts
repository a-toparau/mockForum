export interface IApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPost extends IApiPost {
  createdAt?: string;
  like?: boolean;
  priority?: number;
  isLocal?: boolean;
}

export interface IApiComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IComment extends IApiComment {
  isLocal?: boolean;
}
