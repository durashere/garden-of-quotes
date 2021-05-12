import PropTypes from 'prop-types';

import CenterLayout from '@/layouts/CenterLayout';
import getRandomQuote from '@/api/getRandomQuote';
import Quote from '@/modules/quotes/Quote';

const IndexPage = ({ quote: { quoteText, quoteAuthor, quoteGenre } }) => {
  return (
    <CenterLayout>
      <Quote text={quoteText} author={quoteAuthor} genre={quoteGenre} />
    </CenterLayout>
  );
};

IndexPage.propTypes = {
  quote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
    quoteGenre: PropTypes.string,
  }).isRequired,
};

export async function getServerSideProps() {
  const quote = await getRandomQuote();

  return {
    props: {
      quote,
    },
  };
}

export default IndexPage;
