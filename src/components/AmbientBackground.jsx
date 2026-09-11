function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[12rem] left-[8%] h-[30rem] w-[30rem] rounded-full bg-signal/8 blur-[120px] animate-drift-a" />
      <div className="absolute -bottom-[14rem] right-[4%] h-[34rem] w-[34rem] rounded-full bg-ring/10 blur-[130px] animate-drift-b" />
    </div>
  );
}

export default AmbientBackground;