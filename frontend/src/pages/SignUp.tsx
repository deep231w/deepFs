import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import AuthCard from '../components/AuthCard'
import GoogleButton from '../components/GoogleButton'
import { isAuthenticated } from '../utils/auth'

export default function SignUp(): React.JSX.Element {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isAuthenticated()) navigate('/', { replace: true })
  }, [navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: replace with real API call; backend should set session cookie
    console.log('signup', { name, email, password })
    navigate('/signin', { replace: true })
  }

  return (
    <AuthCard
      title="Create an account"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/signin" className="text-indigo-600">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Full name"
          value={name}
          onChange={setName}
          required
          placeholder="Your name"
        />
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
            Create account
          </Button>
          <GoogleButton label="Sign up with Google" href="/auth/google?signup=1" />
        </div>
      </form>
    </AuthCard>
  )
}