import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-secondary hover:text-primary transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}