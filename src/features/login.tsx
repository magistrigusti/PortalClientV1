import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/input';
import { Link, Button } from '@nextui-org/react';
import { useLoginMutation, useLazyCurrentQuery,  } from '../app/services/userApi';
import { useNavigate } from 'react-router-dom'; 
import { ErrorMessage } from '../components/error-message';
import { hasErrorField } from "../utils/has-error-field"

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

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [ error, setError ] = useState('');
  const [ triggerCurrentQuery ] = useLazyCurrentQuery();

  const onSubmit = async (data: Login) => {
    try {
      await login(data).unwrap();
      await triggerCurrentQuery();
      navigate("/")
    } catch (err) {
      if (hasErrorField(err)) {
        setError(err.data.error)
      }
    }
  }

  return (
    <form className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
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

      <ErrorMessage error={ error } />

      <p className="text-center text-small">
        Нет акkаунта{" "}
        
        <Link className='cursor-pointer'
          size="sm"
          onPress={() => setSelected("sign-up")}
        >
        Зарегистрируйтесь
        </Link>
      </p>

      <div className="flex gap-2 justify-end">
        <Button fullWidth 
          color="primary" 
          type="submit" 
          isLoading={ isLoading }
        >
          Войти
        </Button>
      </div>  
    </form>
  )
}