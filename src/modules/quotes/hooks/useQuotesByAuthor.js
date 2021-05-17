import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import getQuotesByAuthor from '@/api/getQuotesByAuthor';

const useQuotesByAuthor = () => {
  const router = useRouter();

  const [quotes, setQuotes] = useState();

  useEffect(() => {
    if (router.query.author) {
      const fetchQuote = async () => {
        const authorQuotes = await getQuotesByAuthor(router.query.author);
        setQuotes(authorQuotes.data);
      };

      fetchQuote();
    }
  }, [router.query.author]);

  return { quotes };
};

export default useQuotesByAuthor;
