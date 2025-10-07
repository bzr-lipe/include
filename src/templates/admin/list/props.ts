import { UserData } from '@/api/users';

export default interface UserListProps {
  users: UserData[];
  setSelectedIndex: (index: number) => void;
  selectedUser?: number;
}
