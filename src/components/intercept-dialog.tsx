'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { Dialog } from '@/components/ui/dialog';

export const InterceptDialog = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();

  return (
    <Dialog
      defaultOpen
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          router.back();
        }
      }}
    >
      {children}
    </Dialog>
  );
};
