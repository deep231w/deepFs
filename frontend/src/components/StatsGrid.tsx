import { HardDrive, Upload, TrendingUp } from 'lucide-react'

export default function StatsGrid() {
  const stats = [
    {
      icon: <HardDrive size={22} />,
      label: 'Total storage',
      value: '650 MB / 1 GB',
      tone: 'bg-[#e8dfd5]',
    },
    {
      icon: <Upload size={22} />,
      label: 'Files uploaded',
      value: '24 files',
      tone: 'bg-[#dfe9ef]',
    },
    {
      icon: <TrendingUp size={22} />,
      label: 'Last upload',
      value: '2 hours ago',
      tone: 'bg-[#e7e2d7]',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-slate-200 p-4 md:p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.tone} text-slate-900`}>
              {stat.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.04em] text-slate-900 truncate">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
