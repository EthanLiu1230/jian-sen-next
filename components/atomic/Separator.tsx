import cn from 'classnames';
import React from 'react';

export function Separator({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-full', className)}
      viewBox="0 0 345 1.2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H344"
        stroke="#DDDDDD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
