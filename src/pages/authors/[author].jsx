import axios from 'axios';
import Quote from '@/modules/quotes/Quote';
import DefaultLayout from '@/layouts/ListLayout';
import QuotesList from '@/modules/quotes/QuotesList';
import PropTypes, { arrayOf } from 'prop-types';

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
    data: arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
  }).isRequired,
  params: PropTypes.shape({ author: PropTypes.string }).isRequired,
};

export default AuthorPage;

export const getServerSideProps = async (context) => {
  const fetchQuotesByAuthor = async () => {
    const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes', {
      params: {
        author: context.params.author,
      },
    });
    return data;
  };

  const quotes = await fetchQuotesByAuthor();

  return {
    props: { quotes, params: context.params },
  };
};
