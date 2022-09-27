import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UsersContext';
import { Link } from 'react-router-dom';
import { RegisterContainer, ToBack } from './styles';

const registerFormSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  matricula: zod.string(),
  password: zod.string(),
  confirmPassword: zod.string(),
});

type RegisterFormInputs = zod.infer<typeof registerFormSchema>

export function Register() {
  
  const { registerNewUser, users } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerFormSchema)
  });

  async function handleRegister(data: RegisterFormInputs) {   
    
    const emailAlreadyExists = users.some(user => user.email === data.email);

    if(emailAlreadyExists) {
      throw new Error('E-mail já está cadastrado!')
    }
    
    if(data.password !== data.confirmPassword) {
      throw new Error('As senhas não são identicas, por favor verifique novamente')
    } else {
      registerNewUser(data);
      reset();
    }
  };

  return (
    <RegisterContainer>
        <h1>Registrar</h1>
      
      <ToBack>
        <Link to="/login" > Voltar </Link>
      </ToBack>

      <form onSubmit={handleSubmit(handleRegister)}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" autoFocus {...register('name')} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />

        <label htmlFor="matricula">Matrícula</label>
        <input type="number" id="matricula" {...register('matricula')} />

        <label htmlFor="password">Senha</label>
        <input type="text" id="password" {...register('password')} />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input type="text" id="confirmPassword" {...register('confirmPassword')} />

        <button type='submit'>Cadastrar</button>
      </form>
      
    </RegisterContainer>
  )
}