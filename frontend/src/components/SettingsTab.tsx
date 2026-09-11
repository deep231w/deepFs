export default function Settings() {
  return (
    <div className="w-full space-y-6 md:space-y-8">
      {/* Account Settings */}
      <div className="bg-white rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.04)] border border-slate-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-900 mb-4 md:mb-5">Account settings</h3>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              disabled
              className="px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-100 text-slate-600 text-sm cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Username</label>
            <input
              type="text"
              placeholder="username"
              className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition-colors font-medium text-sm">
            Update profile
          </button>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-white rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.04)] border border-slate-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-900 mb-4 md:mb-5">
          Privacy & security
        </h3>
        <div className="space-y-3 md:space-y-4">
          <div className="flex justify-between items-center p-3 bg-[#f7f2eb] rounded-xl text-sm md:text-base">
            <span className="text-slate-700 font-medium">Two-factor authentication</span>
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="flex justify-between items-center p-3 bg-[#f7f2eb] rounded-xl text-sm md:text-base">
            <span className="text-slate-700 font-medium">Enable notifications</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer" />
          </div>
          <button className="w-full px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition-colors">
            Change password
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.04)] border border-red-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-2 md:mb-3">Danger zone</h3>
        <p className="text-xs md:text-sm text-red-700 mb-3 md:mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors font-medium text-sm">
          Delete account
        </button>
      </div>
    </div>
  )
}
