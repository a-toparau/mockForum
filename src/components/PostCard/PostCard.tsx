import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Link as RouterLink } from 'react-router-dom';
import type { IPost } from '@/types/post';
import { usePostsStore } from '@/store/posts';
import { useAuthStore } from '@/store/auth';

export const PostCard = ({ post }: { post: IPost }) => {
  const { react, favoritePosts, toggleFavoritePost } = usePostsStore();
  const { user } = useAuthStore();

  const myReaction = post.like;
  const isFav = favoritePosts.includes(post.id);

  const handleFavoritePostToggle = () => toggleFavoritePost(post.id);
  const handleReactOnPost = (isLike: boolean) => () => react(post.id, isLike);

  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="caption" color="text.secondary">
          #{post.id} • user {post.userId}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {post.body}
        </Typography>
        <Typography variant="caption">likes: {Number(post.like) || 0}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        {user && (
          <Stack direction="row" spacing={1}>
            <IconButton size="small" onClick={handleFavoritePostToggle}>
              {isFav ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>

            <IconButton
              size="small"
              color={myReaction === true ? 'primary' : 'default'}
              onClick={handleReactOnPost(true)}
            >
              <ThumbUpAltIcon />
            </IconButton>

            <IconButton
              size="small"
              color={myReaction === false ? 'primary' : 'default'}
              onClick={handleReactOnPost(false)}
            >
              <ThumbDownAltIcon />
            </IconButton>
          </Stack>
        )}

        <Stack direction="row" spacing={1} ml="auto">
          <Button size="small" component={RouterLink} to={`/post/${post.id}`}>
            Open
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
