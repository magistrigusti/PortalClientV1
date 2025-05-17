import { 
  useCreatePostMutation, useLazyGetAllPostsQuery 
} from '../../app/services/postsApi';
import { useForm, Controller } from 'react-hook-form';
import { Textarea, Button } from '@nextui-org/react';
import { ErrorMessage } from '../error-message';
import { IoMdCreate } from 'react-icons/io';

export const CreatePost = () => {
  const [createPost] = useCreatePostMutation();
  const [triggerAllPosts] = useLazyGetAllPostsQuery();

  const {handleSubmit, control, formState: {errors}, setValue} = useForm();

  const error = errors?.post?.message as string;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createPost({content: data.post}).unwrap();
      setValue('post', '');
      await triggerAllPosts().unwrap();
    } catch (error) {
      console.log(error);
    }
  })

  return (
    <form className="flex-grow" onSubmit={onSubmit}>
      <Controller 
        name="post"
        control={control}
        defaultValue=""
        rules={{required: 'Обязательное поле'}}
        render={({ field }) => (
          <Textarea className="mb-5"
            {...field}
            labelPlacement='outside'
            placeholder="О чем думаете?"
          />
        )}
      />

      { errors && <ErrorMessage error={ error } />}

      <Button className="flex-end"
        color='success'
        endContent={<IoMdCreate />}
        type="submit"
      >
        Create Post
      </Button>
    </form>
  )
}