/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ label, className, ...props }: Props): JSX.Element {
  const { id } = props;
  return (
    <div className="input-group">
      {typeof label === 'string' ? (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      ) : null}
      <input type="text" className="input-group__control" {...props} />
    </div>
  );
}

export default Input;

Input.defaultProps = {
  label: undefined,
};
