import Link from 'next/link';
import PropTypes from 'prop-types';

const ListLayout = ({ children, title }) => {
  return (
    <div className="max-w-xs mx-auto my-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <h1 className="flex gap-4 mt-4 text-4xl font-medium text-gray-600 capitalize">
        <Link href="/">
          <span className="text-4xl cursor-pointer material-icons">chevron_left</span>
        </Link>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default ListLayout;

ListLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
