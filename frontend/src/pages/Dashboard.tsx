import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import StatsGrid from '../components/StatsGrid'
import StorageProgress from '../components/StorageProgress'
import QuickActions from '../components/QuickActions'
import StorageManagement from '../components/StorageManagement'
import SettingsTab from '../components/SettingsTab'
import axios from 'axios'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const [activeTab, setActiveTab] = useState('overview')
  const navigate = useNavigate()

  // Handle resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (!mobile && !sidebarOpen) {
        setSidebarOpen(true) // Open sidebar on desktop
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [sidebarOpen])

  // Close sidebar when navigating on mobile
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleLogout = async() => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/logout`,{},{withCredentials:true})
    navigate('/signin')
  }

  return (
    <div className="flex h-screen bg-[#f6f1ea] text-slate-900">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={(tab) => handleTabChange(tab)}
        onLogout={handleLogout}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-6 md:py-8 bg-[radial-gradient(circle_at_top_left,rgba(17,24,39,0.04),transparent_35%)]">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-slate-900 mb-6 md:mb-8">Storage overview</h2>
              <StatsGrid />
              <StorageProgress />
              <QuickActions />
            </div>
          )}

          {/* Storage Tab */}
          {activeTab === 'storage' && (
            <div className="animate-fade-in max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-slate-900 mb-6 md:mb-8">Manage storage</h2>
              <StorageManagement />
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="animate-fade-in max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-slate-900 mb-6 md:mb-8">Settings</h2>
              <SettingsTab />
            </div>
          )}
        </main>
      </div>

      {/* Mobile Overlay when sidebar is open */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
