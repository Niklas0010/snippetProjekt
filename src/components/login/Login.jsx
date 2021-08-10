import React from 'react'
import { useForm  } from 'react-hook-form'

export function Login() {

  const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <b>Log ind</b>
        <label>Username</label>
        <input name="username" {...register("username", { required: true })}></input>
            {errors.username && <span>Udfyld username</span>}

        <label>Password</label>
        <input name="password" type="password" {...register('password', { required: true })}></input>
            {errors.password && <span>Udfuld password</span>}

        <button>LOG IND</button>
    </form>
  )
}