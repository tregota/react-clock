import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({
  icon,
  timestamp
}) {
  const date = new Date(timestamp);
  const angle = date ? (
      (date.getHours() * 30)
      + (date.getMinutes() / 2)
      + (date.getSeconds() / 600)
    ) : 0;

  return (
    <div className={`react-clock__icon`} style={{ transform: `rotate(${angle}deg)` }}>
      <div className={` react-clock__icon__body`}>
        {icon}
      </div>
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
  timestamp: PropTypes.string.isRequired
};
