import './App.css'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import type React from 'react'
import type { UserData } from './types/userData.type'

function ProtectedRoute({ children, isAuthenticated, isLoading }: { children: React.ReactNode, isAuthenticated: boolean, isLoading: boolean }) {
  if (isLoading) {
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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<UserData | null>(null)
  useEffect(() => {
    nav()   
  }, [navigate]);

  async function nav() {
    try{    
      const res = await fetch("http://localhost:8080/api/v1/me", {
        credentials: "include",
      });
      let data = await res.json()
      setUserData(data.user)
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
    }catch(e){

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
              {userData && <Dashboard userData={userData}/>}
            </ProtectedRoute>
          } />
        <Route path="/signin" element={<PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}><Auth /></PublicRoute>} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </main>
  )
}

export default App
