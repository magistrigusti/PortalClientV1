import React from 'react';
import { Card as NextUiCard } from '@nextui-org/react';
import { useLikePostMutation, useUnlikePostMutation } from '../../app/services/likeApi';
import { useDeletePostMutation, useLazyGetAllPostsQuery, useLazyGetPostByIdQuery } from '../../app/services/postsApi';
import { useDeleteCommentMutation } from '../../app/services/commentsApi';

type Props = {
  avatarUrl: string;
  name: string;
  authorId: string;
  content: string;
  commentId?: string;
  likesCount?: number;
  commentsCount?: number;
  createdAt?: Date;
  id?: string;
  cardFor: 'comment' | 'post' | 'current-post';
  likedByUser?: boolean;
}

export const Card: React.FC<Props> = ({
  avatarUrl = '',
  name = '',
  authorId = '',
  content = '',
  commentId = '',
  likesCount = 0,
  commentsCount = 0,
  createdAt = Date,
  id= "",
  cardFor = "post",
  likedByUser = false
}) => {
  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();
  const [triggerGetAllPosts] = useLazyGetAllPostsQuery();
  const [triggerGetPostById] = useLazyGetPostByIdQuery();
  const [deletePost, deletePostStatus] = useDeletePostMutation();
  const [deleteComment, deleteCommentStatus] = useDeleteCommentMutation();

  return (
    <div>
      Card
    </div>
  )
}