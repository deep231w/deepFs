import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import AuthCard from '../components/AuthCard'
import GoogleButton from '../components/GoogleButton'
import { isAuthenticated } from '../utils/auth'

export default function SignIn(): React.JSX.Element {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isAuthenticated()) navigate('/', { replace: true })
  }, [navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: replace with real API call; backend should set session cookie
    console.log('signin', { email, password })
    navigate('/', { replace: true })
  }

  return (
    <AuthCard
      title="Sign in to your account"
      footer={
        <>
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          placeholder="you@example.com"
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          required
          placeholder="••••••••"
        />
        <div className="space-y-3">
          <Button type="submit" variant="primary">
            Sign In
          </Button>
          <GoogleButton label="Sign in with Google" href="/auth/google" />
        </div>
      </form>
    </AuthCard>
  )
}