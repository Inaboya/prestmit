import React from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
    background: string;
    textColor: string;
    width: string;
    label: string;
}

const Button: React.FC<ButtonProps> = ({background, textColor, width, label}) => {
  return (
    
        <button className="button__wrapper" style={{background: background, color: textColor, width: width}}>
            {label}
        </button>
  )
}

Button.propTypes = {
    background: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default Button