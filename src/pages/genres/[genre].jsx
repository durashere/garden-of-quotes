import PropTypes from 'prop-types';

import DefaultLayout from '@/layouts/ListLayout';
import getQuotesByGenre from '@/api/getQuotesByGenre';
import Quote from '@/modules/quotes/Quote';
import QuotesList from '@/modules/quotes/QuotesList';

const GenrePage = ({ quotes: { data }, params: { genre } }) => {
  return (
    <DefaultLayout title={genre}>
      <QuotesList>
        {data
          .filter((quote) => quote.quoteGenre === genre)
          .map((quote) => (
            <Quote key={quote._id} text={quote.quoteText} author={quote.quoteAuthor} />
          ))}
      </QuotesList>
    </DefaultLayout>
  );
};

GenrePage.propTypes = {
  quotes: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ),
  }).isRequired,
  params: PropTypes.shape({ genre: PropTypes.string }).isRequired,
};

export const getServerSideProps = async (context) => {
  const quotes = await getQuotesByGenre(context.params.genre);

  return {
    props: { quotes, params: context.params },
  };
};

export default GenrePage;
