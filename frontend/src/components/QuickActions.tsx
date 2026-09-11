import { Upload, Trash2, HardDrive, Settings } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    { icon: <Upload size={18} />, label: 'Upload file' },
    { icon: <Trash2 size={18} />, label: 'Clean up' },
    { icon: <HardDrive size={18} />, label: 'Storage' },
    { icon: <Settings size={18} />, label: 'Settings' },
  ]

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.04)] p-4 md:p-6">
      <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-900 mb-4 md:mb-5">Quick actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#f7f2eb] border border-slate-200 rounded-xl hover:bg-[#f1e7dc] transition-all text-slate-700 font-medium text-xs md:text-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-900 border border-slate-200">
              {action.icon}
            </div>
            <span className="text-center line-clamp-2">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
