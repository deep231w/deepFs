import React from 'react'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  variant?: 'primary' | 'ghost'
}

export default function Button({ children, type = 'button', onClick, variant = 'primary' }: Props) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium'
  const cls =
    variant === 'primary'
      ? `${base} bg-indigo-600 text-white hover:bg-indigo-700`
      : `${base} bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50`
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}