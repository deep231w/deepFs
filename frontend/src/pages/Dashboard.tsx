import DashboardLayout from '../components/DashboardLayout'
import StatsGrid from '../components/StatsGrid'
import StorageProgress from '../components/StorageProgress'
import QuickActions from '../components/QuickActions'

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="animate-fade-in w-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.04)] md:p-7">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.05em] text-slate-800 mb-6 md:mb-8">Storage overview</h2>
        <StatsGrid />
        <StorageProgress />
        <QuickActions />
      </div>
    </DashboardLayout>
  )
}
