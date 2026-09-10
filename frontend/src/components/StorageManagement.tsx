import { Upload, Trash2, HardDrive } from 'lucide-react'

export default function StorageManagement() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Storage Info Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 md:mb-5">Storage Overview</h3>
        <div className="space-y-3 md:space-y-4">
          <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-slate-200">
            <span className="text-sm md:text-sm text-slate-600">Used Space:</span>
            <strong className="text-slate-900">650 MB</strong>
          </div>
          <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-slate-200">
            <span className="text-sm md:text-sm text-slate-600">Total Space:</span>
            <strong className="text-slate-900">1 GB</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm md:text-sm text-slate-600">Available Space:</span>
            <strong className="text-slate-900">350 MB</strong>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <ActionCard
          icon={<Upload size={32} />}
          title="Upload Files"
          description="Add new files to your storage"
        />
        <ActionCard
          icon={<Trash2 size={32} />}
          title="Delete Files"
          description="Remove files you no longer need"
        />
        <ActionCard
          icon={<HardDrive size={32} />}
          title="Upgrade Storage"
          description="Increase your storage capacity"
        />
      </div>

      {/* Recent Files */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 md:mb-5">Recent Files</h3>
        <div className="space-y-0 divide-y divide-slate-200">
          <div className="flex justify-between items-center py-3 text-sm md:text-base">
            <span className="text-slate-700 truncate pr-2">📄 document.pdf</span>
            <span className="text-slate-500 text-xs md:text-sm font-medium flex-shrink-0">2.5 MB</span>
          </div>
          <div className="flex justify-between items-center py-3 text-sm md:text-base">
            <span className="text-slate-700 truncate pr-2">🖼️ image.png</span>
            <span className="text-slate-500 text-xs md:text-sm font-medium flex-shrink-0">1.2 MB</span>
          </div>
          <div className="flex justify-between items-center py-3 text-sm md:text-base">
            <span className="text-slate-700 truncate pr-2">📹 video.mp4</span>
            <span className="text-slate-500 text-xs md:text-sm font-medium flex-shrink-0">125 MB</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ActionCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ActionCard({ icon, title, description }: ActionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="text-indigo-600 mb-3 md:mb-4 flex justify-center">{icon}</div>
      <h4 className="text-base font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4">{description}</p>
      <button className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs md:text-sm rounded-lg transition-colors">
        Manage
      </button>
    </div>
  )
}
