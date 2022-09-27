import React, { createContext, useCallback, useEffect, useState } from "react";
import { api } from "../libs/axios";

interface IUser {
  name: string;
  email: string;
  matricula: string;
  password: string;
  confirmPassword: string;
};

interface IAuth {
  matricula: string;
  password: string;
}

interface IUsersContextType {
  users: IUser[];
  loggedIn: boolean;
  registerNewUser: (data: IUser) => Promise<void>;
  userAuth: (data: IAuth) => void;
  checkUserAuth: (data: IAuth) => void;
  logout: () => void;
};

export const UserContext = createContext({} as IUsersContextType);

export function UserContextProvider({children}: {children: React.ReactNode}) {
  
  const [users, setUsers] = useState<IUser[]>([]);
  const [ auth, setAuth ] = useState<IAuth>()
  const [loggedIn, setLoggedIn] = useState(false);
  
  const fatchUsers = useCallback(
    async () => {
      const response = await api.get('/users');

      setUsers(response.data);
    }, []
  );

  const registerNewUser = useCallback(
    async (data: IUser) => {
      const { name, email, matricula, password, confirmPassword } = data
      const response = await api.post('/users', {
        name,
        email,
        matricula,
        password,
        confirmPassword
      });

      const emailAlreadyExists = users.some(user => user.email === email);

      if(emailAlreadyExists) {
        throw new Error('E-mail já está cadastrado');
      }

      if(password !== confirmPassword) {
        throw new Error('As senhas não são identicas, por favor verifique novamente')
      } else {
        setUsers(state => [response.data, ...state]);
      }

    }, []
  );

  function userAuth(data: IAuth) {
    const { matricula, password } = data
    
    setAuth({
      matricula,
      password
    });
  };

  function checkUserAuth(data: IAuth) {
    const { matricula, password } = data;
    const authorizedMatricula = users.some(user => user.matricula === matricula);
    const authorizedPassword = users.some(user => user.password === password);

    if(authorizedMatricula && authorizedPassword) {
      setLoggedIn(true)
      console.log("Está autorizado a logar");
    } else {
      setLoggedIn(false)
      console.log("Não está permitido logar");
    }
  };

  function logout () {
    setLoggedIn(false)
    console.log('fazendo logout!')
  };

  useEffect(() => {
    fatchUsers();
  }, [fatchUsers]);

  return (
    <UserContext.Provider value={{ users, loggedIn, registerNewUser, userAuth, checkUserAuth, logout }}>
      {children}
    </UserContext.Provider>
  )
}