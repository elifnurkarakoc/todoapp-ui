/** Libraries */
import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Header from './Header/Header';

/** Stylesheets */
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layoutHolder">
      <Header />
      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
