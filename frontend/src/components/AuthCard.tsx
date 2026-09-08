import React from 'react'

type Props = {
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export default function AuthCard({ title, children, footer }: Props): React.JSX.Element {
  return (
    <div className="max-w-md mx-auto mt-16 bg-white/80 backdrop-blur-md p-8 rounded-lg shadow">
      {title && <h1 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h1>}
      <div className="space-y-4">{children}</div>
      {footer && <div className="mt-6 text-sm text-center text-gray-600">{footer}</div>}
    </div>
  )
}