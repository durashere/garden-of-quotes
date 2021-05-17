import CenterLayout from '@/layouts/CenterLayout';
import Quote from '@/modules/quotes/Quote';
import useRandomQuote from '@/modules/quotes/hooks/useRandomQuote';
import SkeletonQuote from '@/modules/quotes/QuoteSkeleton';

const IndexPage = () => {
  const { quote } = useRandomQuote();

  return (
    <CenterLayout>
      {!quote && <SkeletonQuote />}
      {quote && (
        <Quote text={quote.quoteText} author={quote.quoteAuthor} genre={quote.quoteGenre} />
      )}
    </CenterLayout>
  );
};

export default IndexPage;
