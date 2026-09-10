export default function Settings() {
  return (
    <div className="max-w-2xl space-y-6 md:space-y-8">
      {/* Account Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 md:mb-5">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              disabled
              className="px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-600 text-sm cursor-not-allowed"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Username</label>
            <input
              type="text"
              placeholder="username"
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-sm">
            Update Profile
          </button>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 md:mb-5">
          Privacy & Security
        </h3>
        <div className="space-y-3 md:space-y-4">
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg text-sm md:text-base">
            <span className="text-slate-700 font-medium">
              Two-Factor Authentication
            </span>
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg text-sm md:text-base">
            <span className="text-slate-700 font-medium">
              Enable Notifications
            </span>
            <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer" />
          </div>
          <button className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition-colors">
            Change Password
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-xl shadow-sm border border-red-200 p-4 md:p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-2 md:mb-3">Danger Zone</h3>
        <p className="text-xs md:text-sm text-red-700 mb-3 md:mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-semibold text-sm">
          Delete Account
        </button>
      </div>
    </div>
  )
}
