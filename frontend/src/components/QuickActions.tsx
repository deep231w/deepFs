import { Upload, Trash2, HardDrive, Settings } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    { icon: <Upload size={24} />, label: 'Upload File' },
    { icon: <Trash2 size={24} />, label: 'Manage Files' },
    { icon: <HardDrive size={24} />, label: 'View Storage' },
    { icon: <Settings size={24} />, label: 'Settings' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
      <h3 className="text-lg md:text-lg font-semibold text-slate-900 mb-4 md:mb-5">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-5 bg-slate-50 border-2 border-slate-200 rounded-lg hover:bg-slate-100 hover:border-indigo-600 hover:text-indigo-600 transition-all text-slate-600 font-semibold text-xs md:text-sm"
          >
            {action.icon}
            <span className="text-center line-clamp-2">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
