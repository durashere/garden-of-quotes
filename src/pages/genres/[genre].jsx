import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import capitalize from '@/common/utils/capitalize';
import ListLayout from '@/layouts/ListLayout';
import Quote from '@/modules/quotes/Quote';
import QuotesList from '@/modules/quotes/QuotesList';
import QuotesListSkeleton from '@/modules/quotes/QuotesListSkeleton';
import useQuotesByGenre from '@/modules/quotes/hooks/useQuotesByGenre';

const GenrePage = () => {
  const {
    query: { genre },
  } = useRouter();
  const { quotes, loading } = useQuotesByGenre();

  if (loading) {
    return (
      <ListLayout>
        <Head>
          <title>Garden of Quotes</title>
          <meta name="description" content={`Some ${genre} quotes.`} />
        </Head>
        <div className="w-4/6 h-10 mt-4 bg-gray-400 rounded animate-pulse" />
        <QuotesListSkeleton />
      </ListLayout>
    );
  }

  return (
    <ListLayout>
      <Head>
        <title>{capitalize(genre)}</title>
      </Head>
      <h1 className="flex gap-4 mt-4 text-4xl font-medium text-gray-600 capitalize">
        <Link href="/">
          <a className="text-4xl cursor-pointer material-icons">chevron_left</a>
        </Link>
        {genre}
      </h1>
      <QuotesList>
        {quotes
          .filter(({ quoteGenre }) => quoteGenre === genre)
          .map(({ _id, quoteText, quoteAuthor }) => (
            <Quote key={_id} text={quoteText} author={quoteAuthor} />
          ))}
      </QuotesList>
    </ListLayout>
  );
};

export default GenrePage;
