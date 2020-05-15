import React from 'react';
import PropTypes from 'prop-types';

export default function Symbol({
  symbol,
  top,
  timestamp,
  scale = 'hour'
}) {
  const date = new Date(timestamp);
  const angle = date ? (scale === 'second' ? (
    (date.getMinutes() * 360)
    + (date.getSeconds() * 6)
  ) : scale === 'minute' ? (
    (date.getHours() * 360)
    + (date.getMinutes() * 6)
    + (date.getSeconds() / 10)
  ) : (
    (date.getHours() * 30)
    + (date.getMinutes() / 2)
    + (date.getSeconds() / 600)
  )) : 0;

  return (
    <div className={`react-clock__symbol`} style={{ transform: `rotate(${angle}deg)` }}>
      <div className={` react-clock__symbol__body`} style={{ top }}>
        {symbol}
      </div>
    </div>
  );
}

Symbol.propTypes = {
  symbol: PropTypes.element.isRequired,
  timestamp: PropTypes.string.isRequired,
  top: PropTypes.string,
  scale: PropTypes.string
};
