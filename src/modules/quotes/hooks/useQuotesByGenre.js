import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import getQuotesByGenre from '@/api/getQuotesByGenre';

const useQuotesByGenre = () => {
  const {
    query: { genre },
  } = useRouter();

  const [quotes, setQuotes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (genre) {
      const fetchQuote = async () => {
        const genreQuotes = await getQuotesByGenre(genre);
        setQuotes(genreQuotes.data);
        setLoading(false);
      };
      fetchQuote();
    }
  }, [genre]);

  return { quotes, loading };
};

export default useQuotesByGenre;
