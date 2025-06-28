import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren & {
  title: string;
  className?: string;
};

export default function Card({ children, title, className }: CardProps) {
  const year = new Date().getFullYear();
  return (
    <div className={clsx('w-full max-w-md bg-card rounded-lg overflow-hidden', className)}>
      <div className="h-14 flex items-center border-b border-border px-6">
        <h1 className="text-lg font-medium">{title}</h1>
      </div>

      <div className="px-6 py-8">{children}</div>

      <div className="h-14 flex items-center justify-between border-t border-border px-6">
        <h1 className="text-base font-medium">{year} Dynamic Forms.</h1>
        <h1 className="text-base font-medium">All rights reserved</h1>
      </div>
    </div>
  );
}
