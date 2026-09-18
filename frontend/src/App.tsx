import './App.css'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import ManageStoragePage from './pages/ManageStoragePage'
import SettingsPage from './pages/SettingsPage'
import type React from 'react'
import type { UserData } from './types/userData.type'

function ProtectedRoute({ children, isAuthenticated, isLoading }: { children: React.ReactNode, isAuthenticated: boolean, isLoading: boolean }) {
  if (isLoading) {
    console.log("not authencitaed");
    return <div className="p-6">Loading...</div>
  }
  return isAuthenticated ? children : <Navigate to="/signin" replace />
}

function PublicRoute({ children, isAuthenticated, isLoading }: { children: React.ReactNode, isAuthenticated: boolean, isLoading: boolean }) {
  if (isLoading) {
    return <div className="p-6">Loading...</div>
  }
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    nav()
  }, [navigate])

  async function nav() {
    try {
      const res = await fetch("http://localhost:8080/api/v1/me", {
        credentials: "include",
      })
      const data = await res.json()
      setUserData(data.user)

      if (res.ok) {
        setIsAuthenticated(true)
        setIsLoading(false)

        if (location.pathname === '/' || location.pathname === '/signin') {
          navigate('/dashboard')
        }
        return
      }

      setIsAuthenticated(false)
      setIsLoading(false)

      if (location.pathname !== '/signin') {
        navigate('/signin')
      }
    } catch (e) {
      console.log("erroe is = ", e)
      setIsAuthenticated(false)
      setIsLoading(false)
      if (location.pathname !== '/signin') {
        navigate('/signin')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-storage"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            >
              {userData && <ManageStoragePage />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            >
              {userData && <SettingsPage userData={userData} />}
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}><Auth /></PublicRoute>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </main>
  )
}

export default App
