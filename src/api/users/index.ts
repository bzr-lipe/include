import api from '..';
import { Pbi } from '../pbis';

export type User = {
  id: number;
  user: string;
  name: string;
  password: string;
  pbis?: Pbi[];
  position: string;
};

export interface UserData extends User {
  employees?: User[];
}

export async function getUsers(): Promise<UserData[]> {
  const res = await api.get<UserData[]>('/users.json');

  return res.data;
}
