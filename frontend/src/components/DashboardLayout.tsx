import { useEffect, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Sidebar from './Sidebar'
import DashboardHeader from './DashboardHeader'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (!mobile && !sidebarOpen) {
        setSidebarOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [sidebarOpen])

  const activeTab =
    location.pathname === '/settings'
      ? 'settings'
      : location.pathname === '/manage-storage'
        ? 'storage'
        : 'overview'

  const handleNavigate = (path: string) => {
    navigate(path)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleLogout = async () => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/logout`, {}, { withCredentials: true })
    navigate('/signin')
  }

  return (
    <div className="flex h-screen bg-[#f5f1ea] text-slate-700">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        isMobile={isMobile}
      />

      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto bg-[#f5f1ea] px-3 py-2 md:px-4 md:py-3">
          <div className="mx-auto w-full max-w-[1500px]">{children}</div>
        </main>
      </div>

      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
