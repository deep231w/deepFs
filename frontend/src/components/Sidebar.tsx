import { Menu, X, Settings, Home, LogOut, HardDrive } from 'lucide-react'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void
  onLogout: () => void
  isMobile: boolean
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
  onLogout,
  isMobile,
}: SidebarProps) {
  return (
    <aside
      className={`bg-gradient-to-b from-indigo-600 to-purple-700 text-white transition-all duration-300 ease-in-out flex flex-col h-screen overflow-y-auto lg:overflow-y-visible fixed lg:static z-50 ${
        sidebarOpen ? 'w-72 translate-x-0' : isMobile ? '-translate-x-full w-72' : 'w-20'
      }`}
    >
      {/* Header */}
      <div className="px-5 py-5 flex items-center justify-between border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <HardDrive size={24} />
          {sidebarOpen && <span className="text-xl font-bold">DeepFS</span>}
        </div>
        <button
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-md transition-colors flex-shrink-0"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation - Scrollable on mobile when sidebar is open */}
      <nav className="flex-1 px-2 py-5 overflow-y-auto flex flex-col gap-2">
        <NavItem
          icon={<Home size={20} />}
          label="Dashboard"
          active={activeTab === 'overview'}
          sidebarOpen={sidebarOpen}
          onClick={() => setActiveTab('overview')}
        />
        <NavItem
          icon={<HardDrive size={20} />}
          label="Manage Storage"
          active={activeTab === 'storage'}
          sidebarOpen={sidebarOpen}
          onClick={() => setActiveTab('storage')}
        />
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          active={activeTab === 'settings'}
          sidebarOpen={sidebarOpen}
          onClick={() => setActiveTab('settings')}
        />
      </nav>

      {/* Footer - Stays at bottom */}
      <div className="px-2 py-5 border-t border-white/10 flex-shrink-0">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-red-500/80 text-white rounded-lg transition-colors whitespace-nowrap text-sm font-medium"
          onClick={onLogout}
        >
          <LogOut size={20} />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active: boolean
  sidebarOpen: boolean
  onClick: () => void
}

function NavItem({ icon, label, active, sidebarOpen, onClick }: NavItemProps) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        active
          ? 'bg-white/25 shadow-lg'
          : 'bg-white/10 hover:bg-white/20'
      } text-white text-sm font-medium whitespace-nowrap`}
      onClick={onClick}
    >
      {icon}
      {sidebarOpen && <span>{label}</span>}
    </button>
  )
}

