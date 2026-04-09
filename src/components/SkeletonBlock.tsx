export const SkeletonBlock = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="space-y-6 w-full max-w-xl px-8">
      <div className="h-10 shimmer-gold rounded-lg" />
      <div className="h-6 shimmer-gold rounded-lg w-3/4 mx-auto" />
      <div className="h-4 shimmer-gold rounded-lg w-1/2 mx-auto" />
    </div>
  </div>
);
