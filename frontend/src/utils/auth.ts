export function isAuthenticated(): boolean {
  // checks for common session cookie names; adjust if your backend uses a different cookie name
  const cookies = document.cookie || ''
  return /(?:^|;\s*)(session|auth_token)=([^;]+)/.test(cookies)
}

export function signOut(): void {
  // remove cookie (best-effort); backend should also clear server-side session
  document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
}