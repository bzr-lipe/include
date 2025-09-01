import api from '..';

export type Pbi = {
  id: number;
  targetDate: string;
  description: string;
  status: 'completed' | 'delayed' | 'pending';
};

export async function getPbis(): Promise<Pbi[]> {
  const res = await api.get<Pbi[]>('/pbis.json');

  return res.data;
}
