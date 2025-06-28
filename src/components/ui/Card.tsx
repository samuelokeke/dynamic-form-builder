import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren & {
  title: string;
  className?: string;
};

export default function Card({ children, title, className }: CardProps) {
  const year = new Date().getFullYear();

  return (
    <div className={clsx('w-full max-w-md bg-card text-card-foreground rounded-lg overflow-hidden', className)}>
      <div className="h-14 flex items-center border-b border-border px-6">
        <h1 className="text-lg uppercase font-semibold truncate">{title}</h1>
      </div>

      <div className="px-6 py-8">{children}</div>

      <div className="h-14 flex items-center justify-between border-t border-border px-6">
        <p className="text-sm font-medium">{year} Dynamic Form Builder.</p>
        <p className="text-sm font-medium">All rights reserved</p>
      </div>
    </div>
  );
}
