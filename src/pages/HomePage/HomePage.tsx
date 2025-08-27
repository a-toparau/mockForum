import { useEffect, useState } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { usePostsStore } from '@/store/posts';
import { PostCard } from '@/components/PostCard/PostCard';

export const HomePage = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { posts, getAllPosts, loading } = usePostsStore();

  useEffect(() => {
    !posts && getAllPosts();
  }, [getAllPosts]);

  // TODO: add pagination
  const displayedPosts = posts.slice(0, 20);

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Posts</Typography>
        <Button variant="contained" onClick={() => setShowCreate((s) => !s)}>
          {showCreate ? 'Hide' : 'New post'}
        </Button>
      </Stack>

      <Stack spacing={2}>
        {displayedPosts.map((p) => (
          <PostCard post={p} key={p.id} />
        ))}
      </Stack>

      {!loading && !posts.length && <Typography>Posts not found</Typography>}
    </Stack>
  );
};
