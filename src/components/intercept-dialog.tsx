'use client';

import { Dialog } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

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
