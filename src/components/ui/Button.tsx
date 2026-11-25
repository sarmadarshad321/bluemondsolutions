import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type BaseProps = {
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
};

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  as?: 'a';
};

type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  as?: 'button';
};

export type ButtonProps = AnchorProps | NativeButtonProps;

const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold tracking-[0.06em] uppercase transition-all duration-200';
const variants = {
  primary: 'bg-var(--blue-royal) text-white px-6 py-3',
  outline: 'border border-var(--blue-royal) text-var(--blue-royal) px-6 py-3',
  white: 'border border-white text-white px-6 py-3',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', ...rest } = props as any;
  const computedClassName = `${baseStyles} ${variants[variant as keyof typeof variants] || variants.primary} ${className}`;

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={computedClassName} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={computedClassName} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {props.children}
    </button>
  );
}
