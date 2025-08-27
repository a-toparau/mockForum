import { usePostsStore } from '@/store/posts';
import { PostList } from '../PostList/PostList';

export const FavoritePage = () => {
  const { posts, favoritePosts } = usePostsStore();
  const displayedPosts = posts.filter(({ id }) => favoritePosts.includes(id));

  return (
    <PostList
      title="My favorite posts"
      posts={displayedPosts}
      emptyStateMsg="You have no favorite posts, yet 😒"
    />
  );
};
