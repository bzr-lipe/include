import { UserData } from '@/api/users';

export default interface UserContextProps {
  user: UserData;
  loginHandler: (username: string, password: string) => void;
  logoutHandler: () => void;
  error?: string;
}
