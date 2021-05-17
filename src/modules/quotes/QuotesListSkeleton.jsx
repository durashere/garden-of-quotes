import QuoteSkeleton from './QuoteSkeleton';

const QuotesListSkeleton = () => {
  return (
    <div className="mt-8 space-y-8">
      {[...Array(10).keys()].map((key) => (
        <QuoteSkeleton key={key} />
      ))}
    </div>
  );
};

export default QuotesListSkeleton;
