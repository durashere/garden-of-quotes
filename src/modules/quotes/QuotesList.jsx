import PropType from 'prop-types';

const QuotesList = ({ children }) => {
  return <div className="mt-8 space-y-8">{children}</div>;
};

QuotesList.propTypes = {
  children: PropType.arrayOf(PropType.object).isRequired,
};

export default QuotesList;
