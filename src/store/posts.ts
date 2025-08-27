import { create } from 'zustand';
import { fetchPosts, fetchCommentsByPostId } from '@/api/posts';
import type { IComment, IPost } from '@/types/post';
import { devtools, persist } from 'zustand/middleware';
import { useNotificationStore } from './notification';

interface IPostsState {
  posts: IPost[];
  comments: Record<number, IComment[]>;
  favoritePosts: number[];
  reactions: Record<number, boolean>;
  loading: boolean;
  error: string | null;

  getAllPosts: () => Promise<void>;
  getPostWithComments: (id: number) => Promise<{ post?: IPost; postComments: IComment[] }>;
  react: (id: number, value: boolean) => void;
  toggleFavoritePost: (id: number) => void;
  addComment: (comment: IComment) => void;
  // selectPostComments: (postId: number) => IComment[];
}

export const usePostsStore = create<IPostsState>()(
  devtools(
    persist(
      (set, get) => ({
        posts: [],
        comments: {},
        favoritePosts: [],
        reactions: {},
        loading: false,
        error: null,

        getAllPosts: async () => {
          const notifications = useNotificationStore.getState();
          set({ loading: true, error: null });

          try {
            const data = await fetchPosts();
            set({ posts: data });
          } catch {
            notifications.showNotification('error', 'Не удалось загрузить посты');
          } finally {
            set({ loading: false });
          }
        },

        getPostWithComments: async (id) => {
          const notifications = useNotificationStore.getState();
          try {
            set({ loading: true, error: null });

            const post = get().posts.find(({ id: postId }) => postId === id);

            let comments = get().comments[id];
            if (!comments) {
              const remoteComments = await fetchCommentsByPostId(id);
              set({ comments: { ...get().comments, [id]: remoteComments } });
              comments = remoteComments;
            }

            return { post, postComments: comments ?? [] };
          } catch {
            notifications.showNotification('error', 'Не удалось загрузить посты');

            return { post: undefined, postComments: [] };
          } finally {
            set({ loading: false });
          }
        },

        react: (id: number, value: boolean | undefined) => {
          set(
            (state) => ({
              posts: state.posts.map((post) =>
                post.id === id ? { ...post, like: post.like === value ? undefined : value } : post,
              ),
            }),
            false,
            `react(${id}, ${value})`,
          );
        },

        toggleFavoritePost: (id: number) => {
          const favs = get().favoritePosts;
          const postIndex = favs.indexOf(id);

          postIndex !== -1 ? favs.splice(postIndex, 1) : favs.push(id);

          set({ favoritePosts: favs }, false, `toggleFavorite(${id})`);
        },

        addComment: (comment) => {
          set(
            (state) => {
              const { postId } = comment;
              const comments = {
                ...state.comments,
                [postId]: [...state.comments[postId], comment],
              };

              return { comments };
            },
            false,
            `addComment(${comment.postId})`,
          );
        },

        // selectPostComments: (postId) => {
        //   return get().comments[postId];
        // },
      }),

      { name: 'postStorage' },
    ),
    {
      name: 'postStorage',
      partialize: ({ posts, comments, favoritePosts, reactions }: IPostsState) => ({
        posts,
        comments,
        favoritePosts,
        reactions,
      }),
    },
  ),
);
