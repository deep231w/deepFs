import DashboardLayout from '../components/DashboardLayout'
import SettingsTab from '../components/SettingsTab'
import type { UserData } from '../types/userData.type'

interface SettingsPageProps {
  userData: UserData | null
}

export default function SettingsPage({ userData }: SettingsPageProps) {
  return (
    <DashboardLayout>
      <div className="animate-fade-in mx-auto w-full max-w-[880px] rounded-none border-0 bg-transparent p-0 shadow-none">
        <h2 className="mb-3 text-2xl font-semibold tracking-[-0.05em] text-slate-800 md:mb-4 md:text-3xl">Settings</h2>
        <SettingsTab userData={userData} />
      </div>
    </DashboardLayout>
  )
}
