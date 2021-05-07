import axios from 'axios';
import Quote from '@/modules/quotes/Quote';
import DefaultLayout from '@/layouts/ListLayout';
import QuotesList from '@/modules/quotes/QuotesList';
import PropTypes, { arrayOf } from 'prop-types';

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
    data: arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
  }).isRequired,
  params: PropTypes.shape({ genre: PropTypes.string }).isRequired,
};

export default GenrePage;

export const getServerSideProps = async (context) => {
  const fetchQuotesByGenre = async () => {
    const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes', {
      params: {
        genre: context.params.genre,
      },
    });
    return data;
  };

  const quotes = await fetchQuotesByGenre();

  return {
    props: { quotes, params: context.params },
  };
};
