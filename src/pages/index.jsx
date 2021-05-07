import CenterLayout from '@/layouts/CenterLayout';
import Quote from '@/modules/quotes/Quote';
import axios from 'axios';
import PropTypes from 'prop-types';

const IndexPage = ({ quote: { quoteText, quoteAuthor, quoteGenre } }) => {
  return (
    <CenterLayout>
      <Quote text={quoteText} author={quoteAuthor} genre={quoteGenre} />
    </CenterLayout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  quote: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export async function getStaticProps() {
  const fetchRandomQuote = async () => {
    const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');
    return data.data[0];
  };

  const quote = await fetchRandomQuote();

  return {
    props: {
      quote,
    },
  };
}
