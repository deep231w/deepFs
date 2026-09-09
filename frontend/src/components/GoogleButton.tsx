
type Props = {
  label?: string
  href?: string
  className?: string
}

export default function GoogleButton({ label = 'Continue with Google', href = '/auth/google', className = '' }: Props) {
  const onClick = () => {
    // navigate to backend OAuth endpoint
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}${href}`
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-md bg-white hover:bg-gray-50 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21.35 11.1H12v2.8h5.35c-.23 1.26-1.03 2.33-2.2 3.04v2.52h3.56c2.08-1.92 3.28-4.74 3.28-8.36 0-.59-.05-1.16-.14-1.72z" fill="#4285F4"/>
        <path d="M12 22c2.97 0 5.46-.98 7.28-2.66l-3.56-2.52c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.28-1.93-6.15-4.53H2.11v2.84C3.92 19.82 7.74 22 12 22z" fill="#34A853"/>
        <path d="M5.85 13.34A7.98 7.98 0 0 1 5.46 12c0-.41.04-.82.09-1.2V8.0H2.11A11.96 11.96 0 0 0 .0 12c0 1.92.47 3.73 1.29 5.34l4.56-3.99z" fill="#FBBC05"/>
        <path d="M12 6.48c1.62 0 3.09.56 4.24 1.65l3.18-3.09C17.46 2.8 14.97 2 12 2 7.74 2 3.92 4.18 2.11 7.16l4.56 3.52C6.72 8.41 9.14 6.48 12 6.48z" fill="#EA4335"/>
      </svg>
      <span>{label}</span>
    </button>
  )
}