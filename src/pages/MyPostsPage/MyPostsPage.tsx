import { usePostsStore } from '@/store/posts';
import { PostList } from '../PostList/PostList';
import { useAuthStore } from '@/store/auth';

export const MyPostsPage = () => {
  const { posts } = usePostsStore();
  const { user } = useAuthStore();

  const displayedPosts = posts.filter(({ userId }) => userId === user?.id);

  return (
    <PostList
      title={`My posts (${user?.name})`}
      posts={displayedPosts}
      emptyStateMsg="Here you can find list of your posts, just create it."
    />
  );
};
