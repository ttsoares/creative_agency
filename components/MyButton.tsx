import clsx from "clsx";
import React from 'react';
import { Pressable, type PressableProps, Text } from 'react-native';


type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export const MyButton = ({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) => {
  // Base classes that apply to all buttons
  const baseClasses = 'py-4 transition-opacity active:opacity-50 font-bold text-lg';

  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-c_red px-8',
    secondary: 'bg-c_black px-8',
    outline: 'p-0',
  };

  // Text color classes
  const textClasses = {
    primary: 'text-white text-size4 font-sans font-bold',
    secondary: 'text-white text-size4 font-sans font-bold',
    outline: 'text-c_red text-size4 font-sans font-bold',
  };

  // Hover classes (mainly for web)
  const hoverClasses = {
    primary: 'hover:opacity-50',
    secondary: 'hover:opacity-50',
    outline: 'hover:opacity-50 underline underline-offset-[12px] decoration-c_red decoration-4',
  };

  // <Text className={clsx("font-sans", className)} {...props} />
  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    hoverClasses[variant],
    className
  );

  const textColorClasses = textClasses[variant];

  return (
    <Pressable className={buttonClasses} {...props}>
      <Text className={textColorClasses}>{children}</Text>
    </Pressable>
  );
};

export default MyButton;