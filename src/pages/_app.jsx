import PropTypes from 'prop-types';

import '@/app/tailwind.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object),
};

App.defaultProps = {
  pageProps: {},
};

export default App;
