import { Menu, Upload } from 'lucide-react'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-[#f9f7f4]/80 border-b border-slate-200 px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 md:gap-5 backdrop-blur-sm">
      <button
        className="lg:hidden flex items-center justify-center text-slate-900 hover:bg-slate-200 p-2 rounded-lg transition-colors"
        onClick={onMenuClick}
      >
        <Menu size={22} />
      </button>

      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">workspace</p>
        <h1 className="text-xl md:text-2xl font-semibold tracking-[-0.05em] text-slate-950 truncate">deepFs</h1>
      </div>

      <div className="flex gap-2 md:gap-3">
        <button className="flex items-center gap-2 px-3 md:px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition-all font-medium text-xs md:text-sm whitespace-nowrap shadow-sm">
          <Upload size={16} />
          <span className="hidden sm:inline">Upload files</span>
          <span className="sm:hidden">Upload</span>
        </button>
      </div>
    </header>
  )
}
