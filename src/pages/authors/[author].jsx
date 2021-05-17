import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import capitalize from '@/common/utils/capitalize';
import ListLayout from '@/layouts/ListLayout';
import Quote from '@/modules/quotes/Quote';
import QuotesList from '@/modules/quotes/QuotesList';
import QuotesListSkeleton from '@/modules/quotes/QuotesListSkeleton';
import useQuotesByAuthor from '@/modules/quotes/hooks/useQuotesByAuthor';

const AuthorPage = () => {
  const {
    query: { author },
  } = useRouter();
  const { quotes, loading } = useQuotesByAuthor();

  if (loading) {
    return (
      <ListLayout>
        <Head>
          <title>Garden of Quotes</title>
        </Head>
        <div className="w-4/6 h-10 mt-4 bg-gray-400 rounded animate-pulse" />
        <QuotesListSkeleton />
      </ListLayout>
    );
  }

  return (
    <ListLayout>
      <Head>
        <title>{capitalize(author)}</title>
      </Head>
      <h1 className="flex gap-4 mt-4 text-4xl font-medium text-gray-600 capitalize">
        <Link href="/">
          <span className="text-4xl cursor-pointer material-icons">chevron_left</span>
        </Link>
        {author}
      </h1>
      <QuotesList>
        {quotes
          .filter(({ quoteAuthor }) => quoteAuthor === author)
          .map(({ _id, quoteText, quoteGenre }) => (
            <Quote key={_id} text={quoteText} genre={quoteGenre} />
          ))}
      </QuotesList>
    </ListLayout>
  );
};

export default AuthorPage;
