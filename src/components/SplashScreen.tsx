export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-9999 grid place-items-center bg-slate-950">
      <style>{`
        @keyframes splashIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="text-center text-slate-100"
        style={{ animation: "splashIn 350ms ease-out both" }}
      >
        <div className="text-[0.7rem] uppercase tracking-[0.35em] text-slate-400">
          Portfolio
        </div>

        <div className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
          Dave Lacson
        </div>

        <div className="mt-2 text-sm text-slate-400">© 2025</div>
      </div>
    </div>
  );
}
