import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 cursor-pointer";

  const variants = {
    primary: "bg-[#C7FF69] text-black hover:bg-[#b5e85e] hover:shadow-[0_0_20px_-5px_#C7FF69] rounded-full",
    secondary: "bg-transparent border border-[#333] text-white hover:border-white hover:text-white rounded-full",
    ghost: "hover:bg-white/5 hover:text-white rounded-md text-neutral-400",
    outline: "border border-[#333] bg-transparent hover:bg-white/5 text-white rounded-full",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`} 
      {...props as any}
    >
      {children}
    </motion.button>
  );
}
