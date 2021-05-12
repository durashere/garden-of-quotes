import axios from 'axios';

const getRandomQuote = async () => {
  const { data } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');
  return data.data[0];
};

export default getRandomQuote;
