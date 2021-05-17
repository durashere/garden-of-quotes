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
        <h1 className="block pb-8 text-6xl text-gray-600 font-berk">Garden of Quotes</h1>
        {loading && <SkeletonQuote />}
        {!loading && (
          <Quote text={quote.quoteText} author={quote.quoteAuthor} genre={quote.quoteGenre} />
        )}
        <button
          type="submit"
          onClick={getNewQuote}
          className="w-full px-4 py-2 mt-8 text-xl font-medium text-gray-600 border-t-2 border-b-2 focus:outline-none rounded-xl"
        >
          More
        </button>
      </div>
    </CenterLayout>
  );
};

export default IndexPage;
