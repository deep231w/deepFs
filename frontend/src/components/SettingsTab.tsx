type ConnectedAccount = {
  email: string
  label: string
  status: string
}

const ownerEmail = 'deepak.owner@gmail.com'

const connectedAccounts: ConnectedAccount[] = [
  { email: 'sarah.work@gmail.com', label: 'Work', status: 'Connected' },
  { email: 'alex.personal@gmail.com', label: 'Personal', status: 'Connected' },
  { email: 'priya.ideas@gmail.com', label: 'Backup', status: 'Connected' },
]

function GoogleBadge() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-label="Google logo">
        <path
          d="M21.6 12.23c0-.68-.06-1.33-.18-1.96H12v3.7h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.9-1.75 2.99-4.33 2.99-7.26Z"
          fill="#4285F4"
        />
        <path
          d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.75-5.58-4.1H.72v2.6A10 10 0 0 0 12 22Z"
          fill="#34A853"
        />
        <path
          d="M6.42 19.9c-.8-1.5-1.27-3.2-1.27-5.1 0-1.9.47-3.6 1.27-5.1V7.1H2.9A10 10 0 0 0 .8 14.8c0 1.62.39 3.16 1.1 4.54l4.52-2.44Z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.52c1.18 0 2.25.41 3.08 1.2l2.3-2.3A9.96 9.96 0 0 0 12 2a10 10 0 0 0-9.2 5.1l4.52 2.4c.78-2.35 2.98-4.1 5.58-4.1Z"
          fill="#EA4335"
        />
      </svg>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export default function Settings() {
  return (
    <div className="mx-auto w-full max-w-[760px] space-y-3 md:space-y-4">
      <div className="rounded-xl border border-[#efe3d4] bg-[#f7f3ee] p-3 shadow-none md:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Google sign-in</p>
            <h3 className="mt-2 text-base font-semibold tracking-[-0.04em] text-slate-900 md:text-lg">Owner</h3>
          </div>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
            Primary
          </span>
        </div>

        <div className="mt-3 rounded-lg border border-[#e7dfd7] bg-[#f3efe9] p-3">
          <div className="flex items-center gap-3">
            <GoogleBadge />
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-slate-500">Currently logged in as</p>
              <p className="mt-1 truncate text-sm font-semibold text-slate-900 md:text-base">{ownerEmail}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[#efe3d4] bg-[#f7f3ee] p-3 shadow-none md:p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold tracking-[-0.04em] text-slate-900 md:text-lg">Connected accounts</h3>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white">
              <PlusIcon />
            </span>
            Add account
          </button>
        </div>

        <div className="mt-3 space-y-2.5">
          {connectedAccounts.map((account) => (
            <div
              key={account.email}
              className="flex items-center justify-between gap-3 rounded-lg border border-[#e7dfd7] bg-[#f3efe9] p-2.5 transition hover:border-slate-300"
            >
              <div className="flex min-w-0 items-center gap-3">
                <GoogleBadge />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">{account.email}</p>
                  <p className="text-[11px] text-slate-500">{account.label} Google account</p>
                </div>
              </div>

              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                {account.status}
              </span>
            </div>
          ))}

          <button
            type="button"
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-[#f3efe9] px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700">
              <PlusIcon />
            </span>
            Connect more Google accounts
          </button>
        </div>
      </div>
    </div>
  )
}
