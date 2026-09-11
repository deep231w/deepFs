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
      className={`bg-[#f7f2eb] border-r border-slate-200 text-slate-900 transition-all duration-300 ease-in-out flex flex-col h-screen overflow-y-auto lg:overflow-y-visible fixed lg:static z-50 ${
        sidebarOpen ? 'w-72 translate-x-0' : isMobile ? '-translate-x-full w-72' : 'w-20'
      }`}
    >
      {/* Header */}
      <div className="px-5 py-5 flex items-center justify-between border-b border-slate-200 flex-shrink-0">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            <HardDrive size={18} />
          </div>
          {sidebarOpen && <span className="text-xl font-semibold tracking-[-0.06em]">deepFs</span>}
        </div>
        <button
          className="bg-slate-900 hover:bg-slate-700 text-white p-2 rounded-lg transition-colors flex-shrink-0"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Navigation - Scrollable on mobile when sidebar is open */}
      <nav className="flex-1 px-2 py-5 overflow-y-auto flex flex-col gap-2">
        <NavItem
          icon={<Home size={18} />}
          label="Dashboard"
          active={activeTab === 'overview'}
          sidebarOpen={sidebarOpen}
          onClick={() => setActiveTab('overview')}
        />
        <NavItem
          icon={<HardDrive size={18} />}
          label="Manage Storage"
          active={activeTab === 'storage'}
          sidebarOpen={sidebarOpen}
          onClick={() => setActiveTab('storage')}
        />
        <NavItem
          icon={<Settings size={18} />}
          label="Settings"
          active={activeTab === 'settings'}
          sidebarOpen={sidebarOpen}
          onClick={() => setActiveTab('settings')}
        />
      </nav>

      {/* Footer - Stays at bottom */}
      <div className="px-2 py-5 border-t border-slate-200 flex-shrink-0">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 bg-slate-900 hover:bg-slate-700 text-white rounded-xl transition-colors whitespace-nowrap text-sm font-medium"
          onClick={onLogout}
        >
          <LogOut size={18} />
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
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        active ? 'bg-slate-900 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-100'
      } text-sm font-medium whitespace-nowrap border border-slate-200`}
      onClick={onClick}
    >
      {icon}
      {sidebarOpen && <span>{label}</span>}
    </button>
  )
}

