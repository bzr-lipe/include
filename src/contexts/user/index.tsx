import { createContext, useContext, useEffect, useState } from 'react';
import UserContextProps from './props';
import { useRouter } from 'next/navigation';
import { getUsers, UserData } from '@/api/users';

const DEFAULT_STATE: UserContextProps = {
  user: {
    id: 0,
    user: '',
    name: '',
    password: '',
    position: '',
  },
  loginHandler: () => null,
  logoutHandler: () => null,
};

const UserContext = createContext<UserContextProps>(DEFAULT_STATE);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<UserData>(DEFAULT_STATE.user);
  const [error, setError] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if (user.user === '') {
      router.push('/');
    }
  }, []);

  const loginHandler = (username: string, password: string) => {
    const fetchData = async () => {
      const response = await getUsers();

      const user = response.find((u: UserData) => u.user === username);

      if (!user) {
        setError('Usuário não encontrado');
        return;
      }

      if (user.password === password) {
        setUser(user);
        router.push(user.position === 'Administrador' ? '/admin' : '/dashboard');
      } else {
        setError('Senha incorreta');
      }
    };

    fetchData();
  };

  const logoutHandler = () => {
    setUser(DEFAULT_STATE.user);
    router.push('/');
  };

  return (
    <UserContext.Provider value={{ user, loginHandler, logoutHandler, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
