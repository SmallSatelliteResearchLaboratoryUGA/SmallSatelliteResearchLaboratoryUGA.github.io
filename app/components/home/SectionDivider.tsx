export default function SectionDivider() {
  return (
    <div className="relative w-full h-px bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0)_10%,rgba(255,255,255,0.2)_20%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.2)_80%,rgba(255,255,255,0)_90%,transparent_100%)] z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-40 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.15)_0%,rgba(56,189,248,0.05)_45%,transparent_100%)] blur-[40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] h-[2px] bg-white blur-[2px] shadow-[0_0_30px_#38bdf8,0_0_60px_rgba(56,189,248,0.8)] opacity-60" />
    </div>
  );
}