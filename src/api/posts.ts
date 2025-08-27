import { API_ENDPOINTS_ENUM } from '@/constants/api';
import { api } from './axiosInstance';
import type { IComment, IPost } from '@/types/post';

export async function fetchPosts(): Promise<IPost[]> {
  const { data } = await api.get<IPost[]>(API_ENDPOINTS_ENUM.POSTS);
  return data;
}

export async function fetchPostById(id: number): Promise<IPost> {
  const { data } = await api.get<IPost>(`${API_ENDPOINTS_ENUM.POSTS}/${id}`);
  return data;
}

export async function fetchCommentsByPostId(postId: number): Promise<IComment[]> {
  const { data } = await api.get<IComment[]>(API_ENDPOINTS_ENUM.COMMENTS, {
    params: { postId },
  });
  return data;
}
