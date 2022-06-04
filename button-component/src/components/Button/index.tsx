import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'text' | 'default'
  disableShadow?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'primary' | 'secondary' | 'danger'
}

const sizes = {
  sm: 'px-3 py-[6px]',
  md: 'px-4 py-2',
  lg: 'px-[22px] py-[11px]',
}

const variants = {
  outline: {
    default:
      'text-[#3F3F3F] border border-[#E0E0E0] hover:bg-[#3F3F3F] hover:bg-opacity-10 focus:bg-[#3F3F3F] focus:bg-opacity-10',
    primary: 'text-[#2962FF] border border-[#2962FF] hover:bg-[#2962FF] hover:bg-opacity-10 focus:bg-[#2962FF] focus:bg-opacity-10h',
    secondary: 'text-[#455A64] border border-[#455A64] hover:bg-[#455A64] hover:bg-opacity-10 focus:bg-[#455A64] focus:bg-opacity-10',
    danger: 'text-[#D32F2F] border border-[#D32F2F] hover:bg-[#D32F2F] hover:bg-opacity-10 focus:bg-[#D32F2F] focus:bg-opacity-10',
  },
  default: {
    default: 'text-[#3F3F3F] bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]',
    primary: 'text-[#FFFFFF] bg-[#2962FF] hover:bg-[#0039CB] focus:bg-[#0039CB]',
    secondary: 'text-[#FFFFFF] bg-[#455A64] hover:bg-[#1C313A] focus:bg-[#1C313A]',
    danger: 'text-[#FFFFFF] bg-[#D32F2F] hover:bg-[#9A0007] focus:bg-[#9A0007]',
  },
  text: {
    default: 'text-[#3F3F3F] hover:bg-[#3F3F3F] hover:bg-opacity-10 focus:bg-[#3F3F3F] focus:bg-opacity-10',
    primary: 'text-[#2962FF] hover:bg-[#2962FF] hover:bg-opacity-10 focus:bg-[#2962FF] focus:bg-opacity-10',
    secondary: 'text-[#455A64] hover:bg-[#455A64] hover:bg-opacity-10 focus:bg-[#455A64] focus:bg-opacity-10',
    danger: 'text-[#D32F2F] hover:bg-[#D32F2F] hover:bg-opacity-10 focus:bg-[#D32F2F] focus:bg-opacity-10',
  },
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  disableShadow,
  disabled = false,
  size = 'md',
  color = 'default',
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={[
        'rounded-md font-noto-sans font-medium text-sm leading-5 flex items-center gap-1',
        sizes[size],
        disableShadow || variant !== 'default' ? '' : 'shadow-[0px_2px_3px_rgba(51,51,51,0.2)]',
        disabled
          ? `disabled:text-[#9E9E9E] ${
              variant !== 'text'
                ? 'disabled:bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]'
                : 'disabled:bg-[transparent] hover:bg-[transparent] focus:bg-[transparent]'
            }`
          : '',
        variants[variant][color],
      ].join(' ')}
    />
  )
}

export default Button
