import { Input } from "../components/input"
import { useForm } from "react-hook-form"
import { Button, Link } from "@nextui-org/react"
import { useRegisterMutation } from "../app/services/userApi"
// import { ErrorMessage } from "../components/error-message"
import { hasErrorField } from "../utils/has-error-field"
import { useState } from "react"

type Register = {
  email: string;
  name: string;
  password: string;
}

type Props = {
  setSelected: (value: string) => void
}

export const Register = ({ setSelected }:Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Register>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const [register] = useRegisterMutation();
  const [error, setError] = useState("");

  const onSubmit = async (data: Register) => {
    try {
      await register(data).unwrap();
      setSelected("login");
    } catch (err) {
      if (hasErrorField(err)) {
        setError(err.data.error)
      }
    }
  }

  return (
    <form className="flex flex-col gap-4"
    >
      <Input required="Обязательное поле"
        control={control}
        label="Name"
        name="name"
      />
    </form>
  )
}