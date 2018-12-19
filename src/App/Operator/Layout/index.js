import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="container-fluid">
    <div className="row content">
      <div className="area">
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
