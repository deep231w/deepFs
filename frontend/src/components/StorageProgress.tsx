export default function StorageProgress() {
  const storagePercentage = 65

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.04)] p-4 md:p-6 mb-6 md:mb-8">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-900">Storage usage</h3>
        <span className="text-sm font-medium text-slate-600">{storagePercentage}% used</span>
      </div>

      <div className="space-y-3">
        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-900 rounded-full transition-all duration-300"
            style={{ width: `${storagePercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-slate-600">650 MB of 1 GB used</p>
      </div>
    </div>
  )
}
