import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import getQuotesByAuthor from '@/api/getQuotesByAuthor';

const useQuotesByAuthor = () => {
  const {
    query: { author },
  } = useRouter();

  const [quotes, setQuotes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (author) {
      const fetchQuote = async () => {
        const authorQuotes = await getQuotesByAuthor(author);
        setQuotes(authorQuotes.data);
        setLoading(false);
      };

      fetchQuote();
    }
  }, [author]);

  return { quotes, loading };
};

export default useQuotesByAuthor;
