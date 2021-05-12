import axios from 'axios';

const getQuotesByAuthor = async (author) => {
  const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes', {
    params: {
      author,
    },
  });
  return data;
};

export default getQuotesByAuthor;
