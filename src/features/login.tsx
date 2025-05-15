import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';
import { Link } from '@heroui/react';

type Login = {
  email: string;
  password: string;
}

type Props = {
  setSelected: (value: string) => void;
}

export const Login: React.FC<Props> = ({ setSelected }) => {
  const {
    handleSubmit, control, formState: { errors }
  } = useForm<Login>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
    <form className="flex flex-col gap-4">
      <Input 
        control={ control }
        name="email"
        label="Email"
        type="email"
        required="Обязателдьное поле"
      />

      <Input 
        control={ control }
        name="password"
        label="Password"
        type="password"
        required="Обязательное поле"
      />

      <p className="text-center text-small">
        Нет акkаунта{" "}
        
        <Link className='cursor-pointer'
          size="sm"
          onPress={() => setSelected("sign-up")}
        >
        Зарегистрируйтесь
        </Link>
      </p>
    </form>
  )
}