import Link from 'next/link';
import PropTypes from 'prop-types';

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
        <div className="pb-4 pr-6 leading-3 text-right">
          {author && (
            <Link href={`/authors/${author}`}>
              <span className="block text-sm font-medium text-gray-700 cursor-pointer">{`- ${author}`}</span>
            </Link>
          )}
          {genre && (
            <Link href={`/genres/${genre}`}>
              <span className="text-sm text-gray-600 cursor-pointer">{`#${genre}`}</span>
            </Link>
          )}
        </div>
      </div>
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
