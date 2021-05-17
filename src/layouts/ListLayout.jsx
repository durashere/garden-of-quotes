import PropTypes from 'prop-types';

const ListLayout = ({ children }) => {
  return (
    <div className="max-w-xs mx-auto my-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      {children}
    </div>
  );
};

export default ListLayout;

ListLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
