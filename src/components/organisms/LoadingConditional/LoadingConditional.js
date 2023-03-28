import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/atoms/Loading/Loading';

const LoadingConditional = ({ isLoading, children }) => {
  if (isLoading) return <Loading />;
  return { ...children };
};

LoadingConditional.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default LoadingConditional;
