'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';

function BackNavigation() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      variant="ghost"
      className="flex gap-2 items-center bg-gradient-to-r from-[#6727A6] to-[#3C1661] text-transparent bg-clip-text hover:bg-transparent hover:text-transparent"
      onClick={handleBack}
    >
      <ArrowLeft size={15} color="#6727A6" /> <span className="text-sm">Back</span>
    </Button>
  );
}

export default BackNavigation;
