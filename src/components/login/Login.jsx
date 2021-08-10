import React from 'react'
import { useForm } from 'react-hook-form'

export function Login() {

  const { register, handleSubmit, errors} = useForm()

  return (
    <form>
        <label>Username</label>
        <input name="username" {...register('username', { required: true })}></input>

        <label>Password</label>
        <input name="password" type="password" {...register('password', { required: true })}></input>
      
        <button>LOG IND</button>
    </form>
  )
}
