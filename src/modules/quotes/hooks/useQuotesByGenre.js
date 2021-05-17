import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import getQuotesByGenre from '@/api/getQuotesByGenre';

const useQuotesByGenre = () => {
  const router = useRouter();

  const [quotes, setQuotes] = useState();

  useEffect(() => {
    if (router.query.genre) {
      const fetchQuote = async () => {
        const genreQuotes = await getQuotesByGenre(router.query.genre);
        setQuotes(genreQuotes.data);
      };

      fetchQuote();
    }
  }, [router.query.genre]);

  return { quotes };
};

export default useQuotesByGenre;
