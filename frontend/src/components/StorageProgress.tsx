export default function StorageProgress() {
  const storagePercentage = 65

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 mb-6 md:mb-8">
      <h3 className="text-lg font-semibold text-slate-900 mb-3 md:mb-4">Storage Usage</h3>
      <div className="space-y-2 md:space-y-3">
        <div className="w-full h-2 md:h-3 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full transition-all duration-300"
            style={{ width: `${storagePercentage}%` }}
          ></div>
        </div>
        <p className="text-xs md:text-sm text-slate-600">{storagePercentage}% Used</p>
      </div>
    </div>
  )
}
