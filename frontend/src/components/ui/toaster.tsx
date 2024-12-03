'use client';

import { useToast } from '@/hooks/use-toast';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import GameActionToast from '../custom-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description }) {
        return (
          <GameActionToast
            action={title as 'COLLECTED' | 'REMOVED'}
            game={description as string}
            key={id}
          />
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
