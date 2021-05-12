import PropTypes from 'prop-types';

import DefaultLayout from '@/layouts/ListLayout';
import getQuotesByAuthor from '@/api/getQuotesByAuthor';
import Quote from '@/modules/quotes/Quote';
import QuotesList from '@/modules/quotes/QuotesList';

const AuthorPage = ({ quotes: { data }, params: { author } }) => {
  return (
    <DefaultLayout title={author}>
      <QuotesList>
        {data
          .filter((quote) => quote.quoteAuthor === author)
          .map((quote) => (
            <Quote key={quote._id} text={quote.quoteText} genre={quote.quoteGenre} />
          ))}
      </QuotesList>
    </DefaultLayout>
  );
};

AuthorPage.propTypes = {
  quotes: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ),
  }).isRequired,
  params: PropTypes.shape({ author: PropTypes.string }).isRequired,
};

export const getServerSideProps = async (context) => {
  const quotes = await getQuotesByAuthor(context.params.author);

  return {
    props: { quotes, params: context.params },
  };
};

export default AuthorPage;
