import { HardDrive, Upload, TrendingUp } from 'lucide-react'

export default function StatsGrid() {
  const stats = [
    {
      icon: <HardDrive size={32} />,
      label: 'Total Storage',
      value: '650 MB / 1 GB',
      className: 'from-indigo-600 to-purple-700',
    },
    {
      icon: <Upload size={32} />,
      label: 'Total Files',
      value: '24 Files',
      className: 'from-pink-500 to-red-500',
    },
    {
      icon: <TrendingUp size={32} />,
      label: 'Last Upload',
      value: '2 hours ago',
      className: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 flex items-center gap-3 md:gap-5 hover:shadow-md hover:-translate-y-1 transition-all"
        >
          <div
            className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.className} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
          >
            {stat.icon}
          </div>
          <div className="min-w-0">
            <p className="text-xs md:text-sm text-slate-500 font-medium">{stat.label}</p>
            <p className="text-lg md:text-xl font-bold text-slate-900 truncate">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
