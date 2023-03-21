/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, type, ...props }: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...props} className="btn">
      {children}
    </button>
  );
}

export default Button;
