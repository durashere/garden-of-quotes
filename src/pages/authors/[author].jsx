import { useRouter } from 'next/router';
import Link from 'next/link';

import ListLayout from '@/layouts/ListLayout';
import Quote from '@/modules/quotes/Quote';
import QuotesList from '@/modules/quotes/QuotesList';
import QuotesListSkeleton from '@/modules/quotes/QuotesListSkeleton';
import useQuotesByAuthor from '@/modules/quotes/hooks/useQuotesByAuthor';

const AuthorPage = () => {
  const {
    query: { author },
  } = useRouter();
  const { quotes } = useQuotesByAuthor();

  return (
    <ListLayout>
      {author && quotes ? (
        <h1 className="flex gap-4 mt-4 text-4xl font-medium text-gray-600 capitalize">
          <Link href="/">
            <span className="text-4xl cursor-pointer material-icons">chevron_left</span>
          </Link>
          {author}
        </h1>
      ) : (
        <div className="w-4/6 h-10 mt-4 bg-gray-400 rounded animate-pulse" />
      )}
      {quotes ? (
        <QuotesList>
          {quotes
            .filter(({ quoteAuthor }) => quoteAuthor === author)
            .map(({ _id, quoteText, quoteGenre }) => (
              <Quote key={_id} text={quoteText} genre={quoteGenre} />
            ))}
        </QuotesList>
      ) : (
        <QuotesListSkeleton />
      )}
    </ListLayout>
  );
};

export default AuthorPage;
