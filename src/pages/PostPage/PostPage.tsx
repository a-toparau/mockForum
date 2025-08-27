import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostsStore } from '@/store/posts';
import { Card, CardContent, Typography, TextField, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import type { IComment, IPost } from '@/types/post';

const schema = z.object({
  body: z.string().min(1, 'Комментарий не может быть пустым'),
});

export default function PostPage() {
  const { id } = useParams();
  const postId = Number(id);
  const { getPostWithComments } = usePostsStore();
  const [postData, setPostData] = useState<{ post?: IPost; postComments: IComment[] }>({
    post: undefined,
    postComments: [],
  });

  const {
    register,
    formState: { errors },
  } = useForm<{ body: string }>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!postId) return;
    (async () => {
      const data = await getPostWithComments(postId);
      setPostData(data);
    })();
  }, [postId, getPostWithComments]);

  // const onSubmit = (data: { body: string }) => {
  // addComment(postId, data.body)
  // reset();
  // setPostData((prev) => ({
  //   ...prev,
  //   postComments: [
  //     ...prev.postComments,
  //     {
  //       postId,
  //       id: Date.now(),
  //       name: 'name',
  //       email: 'mail',
  //       body: data.body,
  //     },
  //   ],
  // }));
  // };

  if (!postData.post) return <Typography>Post not found</Typography>;

  return (
    <Stack spacing={2}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2">user {postData.post.userId}</Typography>
          <Typography variant="h5">{postData.post.title}</Typography>
          <Typography>{postData.post.body}</Typography>
        </CardContent>
      </Card>

      <Typography variant="h6">Comments:</Typography>
      <Stack spacing={2} padding={'0 12px'}>
        {postData.postComments.map((comment) => (
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

      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
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
    </Stack>
  );
}
