import { Menu, Upload } from 'lucide-react'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-white px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 md:gap-5 shadow-sm border-b border-slate-200">
      <button
        className="lg:hidden flex items-center justify-center text-indigo-600 hover:bg-slate-100 p-2 rounded-lg transition-colors"
        onClick={onMenuClick}
      >
        <Menu size={24} />
      </button>
      <h1 className="text-xl md:text-2xl font-bold text-slate-900 truncate">DeepFS Storage</h1>
      <div className="flex gap-2 md:gap-3">
        <button className="flex items-center gap-2 px-3 md:px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all font-semibold text-xs md:text-sm whitespace-nowrap">
          <Upload size={18} />
          <span className="hidden sm:inline">Upload Files</span>
          <span className="sm:hidden">Upload</span>
        </button>
      </div>
    </header>
  )
}
