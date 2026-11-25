import type { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'glass';
};

const variantStyles: Record<string, string> = {
  default: 'background: var(--white); border: 1px solid var(--gray-light);',
  glass: 'background: rgba(255,255,255,0.85); border: 1px solid rgba(255,255,255,0.35);',
};

export default function Card({ variant = 'default', style, className = '', children, ...rest }: CardProps) {
  return (
    <div className={className} style={{ borderRadius: '0.5rem', padding: '1.75rem', boxShadow: '0 20px 48px rgba(0,0,0,0.06)', ...style }} {...rest}>
      {children}
    </div>
  );
}
