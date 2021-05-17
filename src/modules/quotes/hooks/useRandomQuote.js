import { useEffect, useState } from 'react';

import getRandomQuote from '@/api/getRandomQuote';

const useRandomQuote = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);

  const loadQuote = () => {
    setLoading(true);
    const existingQuote = localStorage.getItem('randomQuote');
    setQuote(JSON.parse(existingQuote));
    setLoading(false);
  };

  const fetchAndSaveQuote = async () => {
    setLoading(true);
    const fetchedQuote = await getRandomQuote();
    localStorage.setItem('randomQuote', JSON.stringify(fetchedQuote));
    setQuote(fetchedQuote);
    setLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem('randomQuote') !== null) {
      loadQuote();
    }

    if (localStorage.getItem('randomQuote') === null) {
      fetchAndSaveQuote();
    }
  }, []);

  const getNewQuote = async () => {
    fetchAndSaveQuote();
  };

  return { quote, loading, getNewQuote };
};

export default useRandomQuote;
