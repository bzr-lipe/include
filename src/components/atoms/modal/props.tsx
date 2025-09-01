import { ReactNode } from 'react';

export interface BoxProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
}
