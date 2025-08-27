import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePostsStore } from '@/store/posts';
import { Card, CardContent, Typography, TextField, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuthStore } from '@/store/auth';

const schema = z.object({
  body: z.string().min(10, 'Comment must be more then 10 symbols'),
});

export default function PostPage() {
  const { id } = useParams();
  const postId = Number(id);
  const { posts, getPostWithComments, comments, addComment, loading } = usePostsStore();
  const { user } = useAuthStore();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ body: string }>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!postId) return;
    getPostWithComments(postId);
  }, [postId, getPostWithComments]);

  const post = posts.find((p) => p.id === postId);
  const postComments = comments[postId] || [];

  const onSubmit = (data: { body: string }) => {
    if (user && post) {
      addComment({
        id: Number(new Date()),
        email: user.email,
        name: 'name',
        postId: post.id,
        body: data.body,
        isLocal: true,
      });
      reset();
    }
  };

  if (!post && !loading) return <Typography>Post not found</Typography>;

  return (
    <>
      {post && (
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">user {post.userId}</Typography>
              <Typography variant="h5">{post.title}</Typography>
              <Typography>{post.body}</Typography>
            </CardContent>
          </Card>

          <Typography variant="h6">Comments:</Typography>
          <Stack spacing={2} padding={'0 12px'}>
            {postComments.map((comment) => (
              <Card key={comment.id}>
                <CardContent>
                  <Typography variant="subtitle2" mb={1}>
                    {comment.email}
                  </Typography>

                  <Typography>{comment.body}</Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>

          {user && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={1}>
                <TextField
                  label="Enter your comment"
                  multiline
                  rows={3}
                  {...register('body')}
                  error={!!errors.body}
                  helperText={errors.body?.message}
                />
                <Button type="submit" variant="contained">
                  Send comment
                </Button>
              </Stack>
            </form>
          )}
        </Stack>
      )}
    </>
  );
}
