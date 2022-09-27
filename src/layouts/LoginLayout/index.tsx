import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';
import {  useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UsersContext";
import { LoginContainer } from "./styles";

const AuthFormSchema = zod.object({
  matricula: zod.string(),
  password: zod.string(), 
});

type AuthFormInputs = zod.infer<typeof AuthFormSchema>

export function LoginLayout() {
  
  const { userAuth, checkUserAuth, loggedIn } = useContext(UserContext);
  
  const { register, handleSubmit, reset } = useForm<AuthFormInputs>({
    resolver: zodResolver(AuthFormSchema)
  });

  function handleUserAuth(data: AuthFormInputs) {
    userAuth(data);

    checkUserAuth(data);
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      {loggedIn && <Navigate to="/" />}

      <form onSubmit={handleSubmit(handleUserAuth)}>
        <label htmlFor="matricula"> Matrícula: </label>
        <input type="number" id="matricula" required {...register('matricula')}/>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" required {...register('password')} />

        <button type="submit">Entrar</button>
      </form>

      <div>
        <Link to='/register' >Cadastrar novo usuário</Link>
      </div>
    </LoginContainer>
  )
}