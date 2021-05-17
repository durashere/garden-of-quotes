import { useEffect, useState } from 'react';

import getRandomQuote from '@/api/getRandomQuote';

const useRandomQuote = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchQuote = async () => {
      const randomQuote = await getRandomQuote();
      setQuote(randomQuote);
    };

    fetchQuote();
  }, []);

  const getNewQuote = async () => {
    const randomQuote = await getRandomQuote();
    setQuote(randomQuote);
  };

  return { quote, getNewQuote };
};

export default useRandomQuote;
