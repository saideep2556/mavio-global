const PageLoader = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--charcoal)]/50">
        <span className="w-2 h-2 rounded-full bg-[var(--paprika)] animate-pulse" />
        Loading
      </div>
    </div>
  );
};

export default PageLoader;
