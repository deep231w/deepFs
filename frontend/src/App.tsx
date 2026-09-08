import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { isAuthenticated } from './utils/auth'
import type React from 'react'

function Home() {
  return <div className="p-6">Welcome — protected home</div>
}

function ProtectedRoute({ children }: { children: React.JSX.Element }) {
  return isAuthenticated() ? children : <Navigate to="/signin" replace />
}

function PublicRoute({ children }: { children: React.JSX.Element }) {
  return isAuthenticated() ? <Navigate to="/" replace /> : children
}

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
      </Routes>
    </main>
  )
}

export default App
