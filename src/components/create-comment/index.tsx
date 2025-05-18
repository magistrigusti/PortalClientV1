import { Button, Textarea } from "@nextui-org/react";
import { IoMdCreate } from "react-icons/io";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '../error-message';
import { useCreateCommentMutation } from '../../app/services/commentsApi';
import { useParams } from 'react-router-dom';
import { useLazyGetPostByIdQuery } from "../../app/services/postsApi";

export const CreateComment = () => {
  const { id } = useParams<{ id: string }>()
  const [createComment] = useCreateCommentMutation()
  const [getPostById] = useLazyGetPostByIdQuery()

  const {
    handleSubmit, control, formState: { errors }, setValue
  } = useForm();

  const onSubmit =handleSubmit(async (data) => {
    try {
      if (id) {
        await createComment({ content: data.comment, postId: id }).unwrap();
        await getPostById(id).unwrap();
        setValue("comment", "");
      }
    } catch (error) {
      console.log("err", error);
    }
  });

  const error = errors?.comment?.message as string;

  return (
    <form className="flex-grow" onSubmit={onSubmit}>
      <Controller name="comment"
        control={control}
        defaultValue=""
        rules={{required: "Поле обязательное"}}
        render={({ field }) => (
          <Textarea className="mb-5"
            placeholder="Напишите свой ответ"
            labelPlacement="outside"
            {...field}
          />
        )}
      />

      {errors && <ErrorMessage error={error} />}

      <Button className="flex-end" 
        color="primary"
        endContent={<IoMdCreate />}
        type="submit"
      />
      Ответить
    </form>
  )
}