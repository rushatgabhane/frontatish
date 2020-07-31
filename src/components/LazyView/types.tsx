import { ReactNode } from 'react';

export interface LazyViewProps {
  loading?: boolean;
  error?: boolean;
  loadingUI?: ReactNode;
  errorUI?: ReactNode;
  children: ReactNode;
}
