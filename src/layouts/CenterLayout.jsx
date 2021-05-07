import PropTypes from 'prop-types';

const CenterLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen max-w-xs mx-auto sm:justify-start sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      {children}
    </div>
  );
};

export default CenterLayout;

CenterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
