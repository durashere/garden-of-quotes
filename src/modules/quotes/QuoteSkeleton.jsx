const QuoteSkeleton = () => {
  return (
    <div className="relative w-full text-lg border-t-2 border-b-2 rounded-xl">
      <div className="px-16 py-12 space-y-3">
        <div className="relative w-full h-4 bg-gray-400 rounded animate-pulse" />
        <div className="relative w-4/6 h-4 bg-gray-400 rounded animate-pulse" />
        <div className="relative w-5/6 h-4 bg-gray-400 rounded animate-pulse" />
      </div>
      <div className="flex justify-end pb-4 pr-6">
        <div className="w-1/6 h-4 bg-gray-400 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default QuoteSkeleton;
