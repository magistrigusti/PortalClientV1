import { useGetAllPostsQuery } from '../../app/services/postsApi';
import { CreatePost } from '../../components/create-post';

export const Posts = () => {
  const { data } = useGetAllPostsQuery();

  return (
    <>
      <div className="md-10 w-full">
        <CreatePost />
      </div>
    </>
  )
}