import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center rounded transition-all duration-200 font-medium cursor-pointer';
    
    const variants = {
      primary: 'bg-[#00d4aa] hover:bg-[#00b894] text-[#0a0d0f] font-bold hover:shadow-lg hover:shadow-[#00d4aa]/25 hover:-translate-y-0.5',
      outline: 'border border-white/15 hover:border-white/30 text-white hover:bg-white/5',
      ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
      link: 'text-[#00d4aa] hover:underline underline-offset-4 !p-0 inline-flex items-center gap-1.5',
    };
    
    const sizes = {
      sm: 'text-sm px-5 py-2',
      md: 'text-sm px-8 py-3.5',
      lg: 'text-base px-10 py-4',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
