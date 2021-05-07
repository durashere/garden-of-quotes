import PropTypes from 'prop-types';
import Link from 'next/link';

const Quote = ({ text, author, genre }) => {
  return (
    <div className="relative">
      <div className="text-lg bg-white shadow rounded-xl">
        <div className="px-16 py-12 text-left">
          <span className="absolute text-gray-200 select-none top-3 left-4 text-9xl font-secular">
            &ldquo;
          </span>
          <span className="relative italic text-gray-600">{text}</span>
        </div>
        {author && (
          <div className="pb-4 pr-6 text-right">
            <Link href={`/authors/${author}`}>
              <span className="text-sm font-medium cursor-pointer">{`- ${author}`}</span>
            </Link>
          </div>
        )}
      </div>
      {genre && (
        <div className="mr-4 text-right">
          <Link href={`/genres/${genre}`}>
            <span className="text-sm cursor-pointer">more from {genre}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  genre: PropTypes.string,
};

Quote.defaultProps = {
  author: undefined,
  genre: undefined,
};

export default Quote;
