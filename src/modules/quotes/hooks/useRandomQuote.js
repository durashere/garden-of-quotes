import { useEffect, useState } from 'react';

import getRandomQuote from '@/api/getRandomQuote';

const useRandomQuote = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      const randomQuote = await getRandomQuote();
      setQuote(randomQuote);
      setLoading(false);
    };

    fetchQuote();
  }, []);

  const getNewQuote = async () => {
    setLoading(true);
    const randomQuote = await getRandomQuote();
    setQuote(randomQuote);
    setLoading(false);
  };

  return { quote, loading, getNewQuote };
};

export default useRandomQuote;
