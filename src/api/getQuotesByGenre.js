import axios from 'axios';

const getQuotesByGenre = async (genre) => {
  const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes', {
    params: {
      genre,
    },
  });
  return data;
};

export default getQuotesByGenre;
