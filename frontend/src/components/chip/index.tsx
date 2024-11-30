import React from 'react';
import { Badge } from '../ui/badge';
import { LucideProps } from 'lucide-react';

interface ChipProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | null
    | undefined;
  title: string;
  value: string;
}

function Chip({ Icon, title, variant = 'default', value }: ChipProps) {
  return (
    <Badge className="bg-transparent hover:bg-transparent py-2 px-3 rounded-2xl border-violet-400" variant={variant}>
      <div className="flex gap-1 items-center">
        <Icon color="#6727A6" size={15} />
        <p className="text-violet-600 text-[14px] font-medium">{title}:</p>
        <p className="text-black  text-[14px] font-medium">{value}</p>
      </div>
    </Badge>
  );
}

export default Chip;
