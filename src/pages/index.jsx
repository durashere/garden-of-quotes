import Head from 'next/head';

import CenterLayout from '@/layouts/CenterLayout';
import Quote from '@/modules/quotes/Quote';
import SkeletonQuote from '@/modules/quotes/QuoteSkeleton';
import useRandomQuote from '@/modules/quotes/hooks/useRandomQuote';

const IndexPage = () => {
  const { quote, loading, getNewQuote } = useRandomQuote();

  return (
    <CenterLayout>
      <Head>
        <title>Garden of Quotes</title>
      </Head>
      <div className="w-full text-center">
        {loading && <SkeletonQuote />}
        {!loading && (
          <Quote text={quote.quoteText} author={quote.quoteAuthor} genre={quote.quoteGenre} />
        )}
        <button
          type="submit"
          onClick={getNewQuote}
          className="px-4 py-2 mt-4 text-xl font-medium text-gray-600 bg-gray-300 shadow-md focus:outline-none rounded-xl"
        >
          GET NEW
        </button>
      </div>
    </CenterLayout>
  );
};

export default IndexPage;
