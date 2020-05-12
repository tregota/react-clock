import React from 'react';
import PropTypes from 'prop-types';

export default function Symbol({
  symbol,
  top,
  timestamp
}) {
  const date = new Date(timestamp);
  const angle = date ? (
      (date.getHours() * 30)
      + (date.getMinutes() / 2)
      + (date.getSeconds() / 600)
    ) : 0;

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
  timestamp: PropTypes.string.isRequired
};
