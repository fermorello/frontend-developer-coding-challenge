import { CircleCheck, X } from 'lucide-react';
import { Toast, ToastDescription, ToastTitle } from '@/components/ui/toast';

interface CustomToastProps {
  action: 'COLLECTED' | 'REMOVED';
  game: string;
}

const GameActionToast = ({ action, game }: CustomToastProps) => {
  return (
    <Toast
      className={`grid space-y-2 border-[1px] ${
        action === 'COLLECTED' ? 'border-green-500' : 'border-red.500'
      }`}
    >
      <div className="flex gap-2">
        {action === 'COLLECTED' ? (
          <CircleCheck size={20} color="green" />
        ) : (
          <X size={20} color="red" />
        )}

        <ToastTitle>
          Game {action === 'COLLECTED' ? 'collected' : 'removed'}
        </ToastTitle>
      </div>
      <ToastDescription>
        {action === 'COLLECTED'
          ? `${game} has been added to your collection`
          : ''}
      </ToastDescription>
    </Toast>
  );
};

export default GameActionToast;
