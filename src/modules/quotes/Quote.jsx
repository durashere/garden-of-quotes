import Link from 'next/link';
import PropTypes from 'prop-types';

const Quote = ({ text, author, genre }) => {
  return (
    <div className="relative w-full text-lg border-t-2 border-b-2 rounded-xl">
      <div className="px-16 py-12 text-left">
        <p className="absolute text-gray-200 select-none top-3 left-4 text-9xl font-secular">
          &ldquo;
        </p>
        <p className="relative italic text-gray-600">{text}</p>
      </div>
      <div className="flex flex-col items-end pb-4 pr-6 leading-3 text-right">
        {author && (
          <Link href={`/authors/${author}`}>
            <a className="inline-block text-sm font-medium text-gray-700 cursor-pointer">{`- ${author}`}</a>
          </Link>
        )}
        {genre && (
          <Link href={`/genres/${genre}`}>
            <a className="text-sm text-gray-600 cursor-pointer">{`#${genre}`}</a>
          </Link>
        )}
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
