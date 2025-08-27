import { PostCard } from '@/components/PostCard/PostCard';
import type { IPost } from '@/types/post';
import { Stack, Typography } from '@mui/material';
import { isEmpty } from 'lodash';

interface IProps {
  posts: IPost[];
  emptyStateMsg: string;
  title?: string;
}

export const PostList = ({ title, posts, emptyStateMsg }: IProps) => (
  <Stack spacing={3}>
    <Typography variant="h5">{title}</Typography>
    <Stack spacing={2}>
      {posts.map((p) => (
        <PostCard post={p} key={p.id} />
      ))}
    </Stack>

    {isEmpty(posts) && (
      <Typography variant="h3" textAlign="center" pt={15}>
        {emptyStateMsg}
      </Typography>
    )}
  </Stack>
);
