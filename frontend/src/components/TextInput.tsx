import React from 'react'

type Props = {
  label?: string
  name?: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  placeholder?: string
}

export default function TextInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: Props): React.JSX.Element {
  return (
    <label className="block">
      {label && <span className="text-sm font-medium text-gray-700 mb-1 block">{label}</span>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </label>
  )
}