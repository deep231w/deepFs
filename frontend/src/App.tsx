import './App.css'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import type React from 'react'

function ProtectedRoute({ children, isAuthenticated, isLoading }: { children: React.JSX.Element, isAuthenticated: boolean, isLoading: boolean }) {
  if (isLoading) {
    return <div className="p-6">Loading...</div>
  }
  return isAuthenticated ? children : <Navigate to="/signin" replace />
}

function PublicRoute({ children, isAuthenticated, isLoading }: { children: React.JSX.Element, isAuthenticated: boolean, isLoading: boolean }) {
  if (isLoading) {
    return <div className="p-6">Loading...</div>
  }
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
}

function App() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    nav()   
  }, [navigate]);

  async function nav() {
    const res = await fetch("http://localhost:8080/api/v1/me", {
        credentials: "include",
    });

    if (res.ok) {
        // authenticated
        setIsAuthenticated(true);
        setIsLoading(false);

        navigate("/dashboard");
    } else {
        // not authenticated
        setIsAuthenticated(false);
        setIsLoading(false);

        navigate("/signin");
    }
  }
  return (
    <main>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}><Dashboard /></ProtectedRoute>} />
        <Route path="/signin" element={<PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}><SignIn /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}><SignUp /></PublicRoute>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </main>
  )
}

export default App
